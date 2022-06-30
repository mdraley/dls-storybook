import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
import { FormTextInputType } from '../../global/ts/enums';
export declare class ArvestFormTextInput {
  /** Type specifies what type of data should be entered into the field. Options are: email, password, text, and number. [Required] */
  type: FormTextInputType;
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
  /** */
  small?: string;
  /** Placeholders are optional and have been visually hidden from the component so any text rendered will not have an effect. This prop has been left in the event the design changes in the future. */
  placeholder?: string;
  /**
   * Use autocomplete to improve automated assistance and the use of password managers
   * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autocomplete?: string;
  name: string;
  /**
   * Use Password Rules for input fields to assist password managers and improve security
   *  More info here: https://developer.apple.com/password-rules/
   */
  /** Gain access to elements */
  el: HTMLElement;
  /** Is the element focused? */
  focused: boolean;
  /** Has there been input on the field */
  input: boolean;
  /** Value of the input. */
  value: string;
  /**
   * Regex filter for input value. Defaults to filter out special characters and underscores as per Arvest Bad Character List.
   */
  filter: RegExp;
  /** Maximum number of characters allowed. */
  maxlength: number;
  /** Prop to describe the text mask to be used. */
  mask: string;
  /**
   * Used with the mask prop and handleTextMask function to apply a text mask.
   * More info here: https://github.com/RobinHerbots/Inputmask
   */
  textMask: any;
  /** Function that implements textMask. Commented out is an example of a phone number mask. */
  handleTextMask(): void;
  /** Is the input element required? Defaults to false. */
  required: boolean;
  /** Is the input element disabled? Defaults to false. */
  disabled: boolean;
  handleValueChange(newValue: string): void;
  _value: string;
  /** Prop for error message. */
  error: string;
  _error: string;
  handleError(): void;
  /** Listen for field focus and set state */
  handleFocus(): void;
  /** Listen for input on the field and set state */
  handleInput(): void;
  /** Listen for field change and set state according to if the field contains input or not. */
  handleBlur(): void;
  /** Listen for keyup and apply error validation */
  handleKeyUp(): void;
  /** Simple error validation function if required state is true */
  handleRequired(): void;
  /**
   * textChange event tracks the change in text input. It also checks if there is an active filter on the text input and applies that filter.
   */
  textChange: EventEmitter<string>;
  handleTextInput(e: any): void;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
