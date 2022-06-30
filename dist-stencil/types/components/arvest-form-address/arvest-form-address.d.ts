/// <reference types="google.maps" />
import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestFormAddress {
  /**
   * Should we include US territories in the states list?
   */
  includeTerritories: false;
  /**
   * Google Maps API key.
   */
  apiKey: string;
  /**
   * Reference to Google Map.
   */
  map: google.maps.Map;
  /**
   * Address street.
   */
  street: string;
  /**
   * Address unit #
   */
  unit: string;
  /**
   * Address city
   */
  city: string;
  /**
   * Address state
   */
  stateAbbr: string;
  /**
   * Address zip code
   */
  zip: string;
  /**
   * Search query suggestion responses.
   */
  searchResults: google.maps.places.QueryAutocompletePrediction[];
  /**
   * Google maps api Autocomplete service.
   */
  service: google.maps.places.AutocompleteService;
  /**
   * Is Google Maps ready to go?
   */
  googleLoaded: boolean;
  /**
   * Search suggestion dropdown options as a string.
   */
  autocompleteOptionsString: string;
  /**
   * State dropdown options as a string.
   */
  stateOptionsString: string;
  /**
   * Full address from Google Maps getDetails request.
   */
  addressDetails: google.maps.GeocoderAddressComponent;
  /**
   * Event emitted when any value in the address fields change. Object in event details is formatted like:
   * { streetAddress: string | undefined,
   *   unit: string | undefined,
   *   city: string | undefined,
   *   stateAbbr: string | undefined,
   *   zip: string | undefined
   * }
   */
  addressChange: EventEmitter;
  /**
   * Event emitted when the Google Maps js library is set up and ready to use. Event contain no data payload.
   */
  googleReady: EventEmitter<void>;
  handleGoogeReady(): void;
  handleSearchResultsChange(newValue: google.maps.places.QueryAutocompletePrediction[]): void;
  handleChangeAddressDetails(details: google.maps.GeocoderAddressComponent): void;
  handleStateDropdownChange(): void;
  componentWillLoad(): void;
  /**
   * Determined selected state option, set it as a string in component state.
   */
  setupStateOptions(): void;
  /**
   * Callback for Google Maps library successful load.
   */
  initAutocomplete(): void;
  /**
   * Handles changes to all fields (except state), set values is state, emits event.
   * @param e Event
   * @param field Field name
   */
  handleFieldChange(e: CustomEvent, field: string): void;
  /**
   * Handle changes to state field.
   * @param e Event
   */
  handleStateChange(e: CustomEvent): void;
  /**
   * Emit state changes as an event.
   */
  emitChange(): void;
  /**
   * Handle search suggestion results.
   * @param predictions
   * @param status
   */
  handleSearchResults(predictions: google.maps.places.QueryAutocompletePrediction[], status: string): void;
  /**
   * Handle changes to street address autocomplete text search field.
   * @param e Text change event.
   */
  handleSearchTextChange(e: CustomEvent): void;
  /**
   * Handle selecting a choice from search suggestions dropdown.
   * @param e Dropdown select event
   */
  handleOptionSelectFromDropdown(e: CustomEvent): void;
  /**
   * Handle getting full address details from a chosen search suggestion.
   * @param place google.maps.GeocoderAddressComponent
   * @param status Hopefully OK
   */
  handleGetPlaceDetails(place: google.maps.GeocoderAddressComponent, status: string): void;
  render(): FunctionalComponent;
}
