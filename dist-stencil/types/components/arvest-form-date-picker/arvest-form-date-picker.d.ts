import { FunctionalComponent, EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestFormDatePicker {
  el: HTMLElement;
  inputRef: HTMLDuetDatePickerElement;
  /**
   * Name for the input element
   */
  name: string;
  /**
   * Component id
   */
  identifier: string;
  /**
   * Is the input element disabled?
   */
  disabled: boolean;
  /**
   * Is the input element required?
   */
  required: boolean;
  /**
   * Minimum date available to pick (ex. 1900-01-01)
   */
  min: string;
  /**
   * Maximum date available to pick (ex. 1900-01-01)
   */
  max: string;
  /**
   * Assign a role to the component
   */
  role?: string;
  /**
   * Define the label for the component
   */
  label: string;
  /**
   * Define the placeholder value for the input
   */
  placeholder: string;
  /**
   * Element value (ex. 1900-01-01)
   */
  value?: string;
  handleValueChange(newValue: string): void;
  _value: string;
  error?: string;
  focused?: boolean;
  _placeholder: string;
  isValid: boolean;
  /**
   * Event emitted when the date picker date changes.
   */
  datePickerChange: EventEmitter<CustomEvent>;
  /**
   * Event emitted when the user focuses into the date picker.
   */
  datePickerFocus: EventEmitter<CustomEvent>;
  /**
   * Event emitted when the user leaves the date picker.
   */
  datePickerBlur: EventEmitter<CustomEvent>;
  /**
   * Event emitted when calendar display of date picker opens.
   */
  datePickerOpen: EventEmitter<CustomEvent>;
  /**
   * Event emitted when calendar display of date picker closes.
   */
  datePickerClose: EventEmitter<CustomEvent>;
  handleChange(event: CustomEvent & {
    component: 'duet-date-picker';
    valueAsDate: Date;
    value: string;
  }): void;
  handleFocus(event: CustomEvent): void;
  handleBlur(event: CustomEvent): void;
  handleOpen(event: CustomEvent): void;
  handleClose(event: CustomEvent): void;
  /** Function that implements InputMask. */
  handleTextMask(): void;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
