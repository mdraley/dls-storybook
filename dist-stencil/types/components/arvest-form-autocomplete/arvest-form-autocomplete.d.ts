import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
import { IFormDropdownOption } from '../../global/ts/interfaces';
export declare class ArvestFormAutocomplete {
  el: HTMLElement;
  /** Label describes the input field for the user and for screenreaders [Required] */
  label: string;
  /** Give the Element a unique ID to match labels with form fields and enable functionality [Required] */
  elemId: string;
  /**
   * The aria-required attribute provides assistive technologies information indicating if a field is required or not. [Required]
   *  More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute
   */
  ariaRequired: boolean;
  /**
  * The aria-describedby attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them.
  * More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
  */
  ariaDescribedBy?: string;
  /**
  * The aria-label attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.
  * More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  */
  ariaLabel?: string;
  /**
   * True for small display.
   */
  small?: string;
  /**
   * Placeholders are optional and have been visually hidden from the component so any text rendered will not have an effect. This prop has been left in the event the design changes in the future.
   */
  placeholder?: string;
  /**
   * Element name attribute.
   */
  name: string;
  /**
   * Is the form element required?
   */
  required: boolean;
  /**
   * Use autocomplete to improve automated assistance and the use of password managers
   * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autocomplete?: string;
  /**
   * Initial value for field.
   */
  value: string;
  /**
   * Dropdown options '[{label: string, value: string, selected?: boolean}]'
   */
  options: string;
  /**
   * Is it disabled?
   */
  disabled: false;
  /**
   * Are options shown?
   */
  showOptions: boolean;
  /**
   * Selected option as an object.
   */
  selectedOption: IFormDropdownOption | null;
  handleClick(ev: MouseEvent): void;
  handleKeyDown(ev: KeyboardEvent): void;
  onOptionsUpdated(e: CustomEvent): void;
  handleOptionsChange(newValue: string): void;
  /**
   * Event emitted when the text changes in the text field portion of the autocomplete. Data payload contains text string.
   */
  textChange: EventEmitter<string>;
  /**
   * Event emitted when a value is selected from the options dropdown. Data payload contain option object.
   */
  dropdownSelectValue: EventEmitter<IFormDropdownOption>;
  /**
   * Event emitted when the dropdown options are updated. Contains new options formatted as a string. Does not bubble outside of component.
   */
  optionsUpdated: EventEmitter<string>;
  /**
   * Handle text changes to textfield.
   * @param e Event
   */
  handleTextChange(e: CustomEvent): void;
  /**
   * Handle selecting an option from the dropdown.
   * @param option
   */
  handleOptionSelect(option: IFormDropdownOption): void;
  render(): FunctionalComponent;
}
