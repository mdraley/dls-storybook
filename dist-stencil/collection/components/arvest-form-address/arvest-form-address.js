import { Component, Host, h, Event, Prop, State, Listen, Watch } from '@stencil/core';
import { statesWithTerritories, statesWithoutTerritories } from '../../utils/utils';
export class ArvestFormAddress {
  constructor() {
    /**
     * Is Google Maps ready to go?
     */
    this.googleLoaded = false;
  }
  handleGoogeReady() {
    this.googleLoaded = true;
  }
  handleSearchResultsChange(newValue) {
    if (!newValue.length) {
      this.autocompleteOptionsString = '';
    }
    const optionsList = newValue.map((result) => {
      return {
        label: result.description,
        value: result.place_id
      };
    });
    this.autocompleteOptionsString = JSON.stringify(optionsList);
  }
  handleChangeAddressDetails(details) {
    /**
     * Get user-facing string for auto-filling address form from Google address components.
     * @param type Matches address component type.
     * @param longOrShortName long_name | short_name
     * @returns
     */
    const getDetails = (type, longOrShortName) => {
      const index = details['address_components'].findIndex((address) => {
        return address.types.includes(type);
      });
      return details['address_components'][index][longOrShortName];
    };
    this.street = `${getDetails('street_number', 'short_name')} ${getDetails('route', 'long_name')}`;
    this.city = getDetails('locality', 'long_name');
    this.stateAbbr = getDetails('administrative_area_level_1', 'short_name');
    this.zip = getDetails('postal_code', 'long_name');
  }
  handleStateDropdownChange() {
    this.setupStateOptions();
  }
  componentWillLoad() {
    var _a, _b, _c;
    this.setupStateOptions();
    if (this.googleLoaded) {
      return;
    }
    // Put Google Maps callback function on the window, bound to the scope of this component.
    window.arvestInitAutocomplete = this.initAutocomplete.bind(this);
    // Google maps library has already loaded, set this.service and return early. 
    if ((_c = (_b = (_a = window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.places) === null || _c === void 0 ? void 0 : _c.AutocompleteService) {
      this.initAutocomplete();
      return;
    }
    // First load of the component and google maps library isn't present.
    if (this.apiKey) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places&callback=arvestInitAutocomplete`;
      script.async = true;
      document.head.appendChild(script);
    }
  }
  /**
   * Determined selected state option, set it as a string in component state.
   */
  setupStateOptions() {
    let options;
    this.includeTerritories ? options = [...statesWithTerritories] : options = [...statesWithoutTerritories];
    const optionsWithSelected = options.map((option) => {
      if (option.value === this.stateAbbr) {
        const selectedOption = Object.assign({ selected: true }, option);
        return selectedOption;
      }
      return option;
    });
    this.stateOptionsString = JSON.stringify(optionsWithSelected);
  }
  /**
   * Callback for Google Maps library successful load.
   */
  initAutocomplete() {
    this.service = new window.google.maps.places.AutocompleteService();
    const mapDiv = document.createElement('div');
    this.map = new window.google.maps.Map(mapDiv);
    this.googleReady.emit();
  }
  /**
   * Handles changes to all fields (except state), set values is state, emits event.
   * @param e Event
   * @param field Field name
   */
  handleFieldChange(e, field) {
    this[field] = e.detail;
    this.emitChange();
  }
  /**
   * Handle changes to state field.
   * @param e Event
   */
  handleStateChange(e) {
    var _a;
    this.stateAbbr = (_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.value;
    this.emitChange();
  }
  /**
   * Emit state changes as an event.
   */
  emitChange() {
    this.addressChange.emit({
      streetAddress: this.street,
      unit: this.unit,
      city: this.city,
      stateAbbr: this.stateAbbr,
      zip: this.zip
    });
  }
  /**
   * Handle search suggestion results.
   * @param predictions
   * @param status
   */
  handleSearchResults(predictions, status) {
    if (status === 'OK' && predictions.length) {
      this.searchResults = predictions;
    }
  }
  /**
   * Handle changes to street address autocomplete text search field.
   * @param e Text change event.
   */
  handleSearchTextChange(e) {
    e.stopPropagation();
    e.preventDefault();
    const searchText = e.detail;
    if (searchText.length > 3) {
      this.service.getQueryPredictions({
        input: searchText
      }, this.handleSearchResults.bind(this));
    }
  }
  /**
   * Handle selecting a choice from search suggestions dropdown.
   * @param e Dropdown select event
   */
  handleOptionSelectFromDropdown(e) {
    var _a;
    if ((_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.value) {
      const detailsService = new window.google.maps.places.PlacesService(this.map);
      const request = {
        placeId: e.detail.value,
        fields: ['address_component']
      };
      this.street = e.detail.label;
      detailsService.getDetails(request, this.handleGetPlaceDetails.bind(this));
    }
  }
  /**
   * Handle getting full address details from a chosen search suggestion.
   * @param place google.maps.GeocoderAddressComponent
   * @param status Hopefully OK
   */
  handleGetPlaceDetails(place, status) {
    if (status === 'OK') {
      this.addressDetails = place;
    }
  }
  render() {
    let addressField;
    if (this.googleLoaded) {
      addressField = h("arvest-form-autocomplete", { label: "Full street address", class: "addressForm__addressAutocomplete", name: "address", elemId: "street-address", ariaLabel: "Enter your street address", onTextChange: (e) => this.handleSearchTextChange(e), options: this.autocompleteOptionsString, onDropdownSelectValue: (e) => this.handleOptionSelectFromDropdown(e), value: this.street, required: true });
    }
    else {
      addressField = h("arvest-form-textinput", { label: "Full street address", class: "addressForm__streetAddress", name: "address", elemId: "street-address", ariaLabel: "Enter your street address", onTextChange: (e) => this.handleFieldChange(e, 'street'), value: this.street, required: true });
    }
    return (h(Host, null,
      h("div", { class: "addressForm" },
        addressField,
        h("arvest-form-textinput", { label: "Unit (optional)", class: "addressForm__unit", name: "unit", elemId: "unit-number", ariaLabel: "Enter your unit number (optional)", onTextChange: (e) => this.handleFieldChange(e, 'unit'), value: this.unit }),
        h("arvest-form-textinput", { label: "City", class: "addressForm__city", name: "city", elemId: "city-name", ariaLabel: "Enter your city", onTextChange: (e) => this.handleFieldChange(e, 'city'), value: this.city, required: true }),
        h("arvest-dropdown", { label: "State", class: "addressForm__state", options: this.stateOptionsString, width: "100%", identifier: "state-dropdown", onDropdownSelectValue: (e) => this.handleStateChange(e) }),
        h("arvest-form-textinput", { label: "ZIP", class: "addressForm__zip", name: "zip", elemId: "zip-code", ariaLabel: "Enter your ZIP code", onTextChange: (e) => this.handleFieldChange(e, 'zip'), value: this.zip, filter: /\D/gu, maxlength: 5, required: true }))));
  }
  static get is() { return "arvest-form-address"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-address.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-address.css"]
  }; }
  static get properties() { return {
    "includeTerritories": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "false",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Should we include US territories in the states list?"
      },
      "attribute": "include-territories",
      "reflect": false
    },
    "apiKey": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Google Maps API key."
      },
      "attribute": "api-key",
      "reflect": false
    },
    "street": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Address street."
      },
      "attribute": "street",
      "reflect": false
    },
    "unit": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Address unit #"
      },
      "attribute": "unit",
      "reflect": false
    },
    "city": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Address city"
      },
      "attribute": "city",
      "reflect": false
    },
    "stateAbbr": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Address state"
      },
      "attribute": "state-abbr",
      "reflect": false
    },
    "zip": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Address zip code"
      },
      "attribute": "zip",
      "reflect": false
    }
  }; }
  static get states() { return {
    "map": {},
    "searchResults": {},
    "service": {},
    "googleLoaded": {},
    "autocompleteOptionsString": {},
    "stateOptionsString": {},
    "addressDetails": {}
  }; }
  static get events() { return [{
      "method": "addressChange",
      "name": "addressChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when any value in the address fields change. Object in event details is formatted like: \n{ streetAddress: string | undefined,\n  unit: string | undefined,\n  city: string | undefined,\n  stateAbbr: string | undefined,\n  zip: string | undefined\n}"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "googleReady",
      "name": "googleReady",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the Google Maps js library is set up and ready to use. Event contain no data payload."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "searchResults",
      "methodName": "handleSearchResultsChange"
    }, {
      "propName": "addressDetails",
      "methodName": "handleChangeAddressDetails"
    }, {
      "propName": "stateAbbr",
      "methodName": "handleStateDropdownChange"
    }]; }
  static get listeners() { return [{
      "name": "googleReady",
      "method": "handleGoogeReady",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
