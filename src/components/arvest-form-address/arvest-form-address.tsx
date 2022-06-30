import { Component, Host, h, Event, EventEmitter, Prop, State, Listen, Watch, FunctionalComponent} from '@stencil/core';
import { IFormDropdownOption } from '../../global/ts/interfaces';
import { statesWithTerritories, statesWithoutTerritories } from '../../utils/utils';
@Component({
  tag: 'arvest-form-address',
  styleUrl: 'arvest-form-address.css',
  shadow: true
})
export class ArvestFormAddress {

  /**
   * Should we include US territories in the states list?
   */
  @Prop() includeTerritories: false;

  /**
   * Google Maps API key.
   */
  @Prop() apiKey: string;

  /**
   * Reference to Google Map.
   */
  @State() map: google.maps.Map;

  /**
   * Address street.
   */
  @Prop({mutable: true}) street: string;

  /**
   * Address unit #
   */
  @Prop({mutable: true}) unit: string;

  /**
   * Address city
   */
  @Prop({mutable: true}) city: string;

  /**
   * Address state
   */
  @Prop({mutable: true}) stateAbbr: string;

  /**
   * Address zip code
   */
  @Prop({mutable: true}) zip: string;

  /**
   * Search query suggestion responses.
   */
  @State() searchResults: google.maps.places.QueryAutocompletePrediction[];

  /**
   * Google maps api Autocomplete service.
   */
  @State() service: google.maps.places.AutocompleteService;

  /**
   * Is Google Maps ready to go?
   */
  @State() googleLoaded = false;

  /**
   * Search suggestion dropdown options as a string.
   */
  @State() autocompleteOptionsString: string;

  /**
   * State dropdown options as a string.
   */
  @State() stateOptionsString: string;

  /**
   * Full address from Google Maps getDetails request.
   */
  @State() addressDetails: google.maps.GeocoderAddressComponent;

  /**
   * Event emitted when any value in the address fields change. Object in event details is formatted like: 
   * { streetAddress: string | undefined,
   *   unit: string | undefined,
   *   city: string | undefined,
   *   stateAbbr: string | undefined,
   *   zip: string | undefined
   * }
   */
  @Event({eventName: 'addressChange', bubbles: true}) addressChange: EventEmitter;

  /**
   * Event emitted when the Google Maps js library is set up and ready to use. Event contain no data payload.
   */
  @Event({eventName: 'googleReady', bubbles: true}) googleReady: EventEmitter<void>;

  @Listen('googleReady')
  handleGoogeReady():void {
    this.googleLoaded = true;
  }

  @Watch('searchResults')
  handleSearchResultsChange(newValue: google.maps.places.QueryAutocompletePrediction[]):void {
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

  @Watch('addressDetails')
  handleChangeAddressDetails(details: google.maps.GeocoderAddressComponent):void {
    /**
     * Get user-facing string for auto-filling address form from Google address components.
     * @param type Matches address component type.
     * @param longOrShortName long_name | short_name
     * @returns 
     */
    const getDetails = (type: string, longOrShortName:string):string => {
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

  @Watch('stateAbbr')
  handleStateDropdownChange():void {
    this.setupStateOptions();
  }

  componentWillLoad():void {
    this.setupStateOptions();

    if (this.googleLoaded) {
      return;
    }

    // Put Google Maps callback function on the window, bound to the scope of this component.
    (window as any).arvestInitAutocomplete = this.initAutocomplete.bind(this);

    // Google maps library has already loaded, set this.service and return early. 
    if ((window as any).google?.maps?.places?.AutocompleteService) {
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
  setupStateOptions():void {
    let options: Array<IFormDropdownOption>;
    this.includeTerritories ? options = [...statesWithTerritories] : options = [...statesWithoutTerritories];
    const optionsWithSelected = options.map((option: IFormDropdownOption) => {
      if (option.value === this.stateAbbr) {
        const selectedOption = {selected: true, ...option};
        return selectedOption;
      }
      return option;
    });
    this.stateOptionsString = JSON.stringify(optionsWithSelected);
  }

  /**
   * Callback for Google Maps library successful load.
   */
  initAutocomplete():void {
    this.service = new (window as any).google.maps.places.AutocompleteService();
    const mapDiv = document.createElement('div');
    this.map = new (window as any).google.maps.Map(mapDiv);
    this.googleReady.emit();
  }

  /**
   * Handles changes to all fields (except state), set values is state, emits event.
   * @param e Event
   * @param field Field name
   */
  handleFieldChange(e: CustomEvent, field: string):void {
    this[field] = e.detail;
    this.emitChange();
  }

  /**
   * Handle changes to state field.
   * @param e Event
   */
  handleStateChange(e: CustomEvent):void {
    this.stateAbbr = e?.detail?.value;
    this.emitChange();
  }

  /**
   * Emit state changes as an event.
   */
  emitChange():void {
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
  handleSearchResults(predictions: google.maps.places.QueryAutocompletePrediction[], status: string):void {
    if (status === 'OK' && predictions.length) {
      this.searchResults = predictions;
    }
  }

  /**
   * Handle changes to street address autocomplete text search field.
   * @param e Text change event.
   */
  handleSearchTextChange(e: CustomEvent):void {
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
  handleOptionSelectFromDropdown(e: CustomEvent):void {
    if (e?.detail?.value) {
      const detailsService = new (window as any).google.maps.places.PlacesService(this.map);
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
  handleGetPlaceDetails(place: google.maps.GeocoderAddressComponent, status: string):void {
    if (status === 'OK') {
      this.addressDetails = place;
    }
  }

  render():FunctionalComponent {
    let addressField: HTMLElement;
    if (this.googleLoaded) {
      addressField = <arvest-form-autocomplete
        label="Full street address" 
        class="addressForm__addressAutocomplete" 
        name="address"
        elemId="street-address"
        ariaLabel="Enter your street address"
        onTextChange={(e) => this.handleSearchTextChange(e)}
        options={this.autocompleteOptionsString}
        onDropdownSelectValue={(e) => this.handleOptionSelectFromDropdown(e)}
        value={this.street}
        required={true}
      />;
    } else {
      addressField = <arvest-form-textinput 
        label="Full street address" 
        class="addressForm__streetAddress" 
        name="address"
        elemId="street-address"
        ariaLabel="Enter your street address"
        onTextChange={(e) => this.handleFieldChange(e, 'street')}
        value={this.street}
        required={true}
      />;
    }
    return (
      <Host>
        <div class="addressForm">
          {addressField}
          <arvest-form-textinput 
            label="Unit (optional)" 
            class="addressForm__unit" 
            name="unit"
            elemId="unit-number"
            ariaLabel="Enter your unit number (optional)"
            onTextChange={(e) => this.handleFieldChange(e, 'unit')}
            value={this.unit}
          />
          <arvest-form-textinput 
            label="City" 
            class="addressForm__city"
            name="city" 
            elemId="city-name"
            ariaLabel="Enter your city"
            onTextChange={(e) => this.handleFieldChange(e, 'city')}
            value={this.city}
            required={true}
          />
          <arvest-dropdown
            label="State"
            class="addressForm__state"
            options={this.stateOptionsString}
            width="100%"
            identifier="state-dropdown"
            onDropdownSelectValue={(e) => this.handleStateChange(e)}
          />
          <arvest-form-textinput 
            label="ZIP"
            class="addressForm__zip"
            name="zip"
            elemId="zip-code"
            ariaLabel="Enter your ZIP code"
            onTextChange={(e) => this.handleFieldChange(e, 'zip')}
            value={this.zip}
            filter={/\D/gu}
            maxlength={5}
            required={true}
          />
        </div>
      </Host>
    );
  }
}
