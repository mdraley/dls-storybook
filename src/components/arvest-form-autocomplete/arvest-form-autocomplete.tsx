import { Component, Host, h, Prop, Event, EventEmitter, Listen, Element, State, Watch, FunctionalComponent } from '@stencil/core';
import { IFormDropdownOption } from '../../global/ts/interfaces';

@Component({
  tag: 'arvest-form-autocomplete',
  styleUrl: 'arvest-form-autocomplete.css',
  shadow: true
})
export class ArvestFormAutocomplete {
  @Element() el: HTMLElement;

  /** Label describes the input field for the user and for screenreaders [Required] */
  @Prop() label: string;

  /** Give the Element a unique ID to match labels with form fields and enable functionality [Required] */
  @Prop() elemId: string;

  /**
   * The aria-required attribute provides assistive technologies information indicating if a field is required or not. [Required]
   *  More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute
   */
  @Prop() ariaRequired: boolean;

  /**
  * The aria-describedby attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them.
  * More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
  */
  @Prop() ariaDescribedBy?: string;

  /**
  * The aria-label attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.
  * More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  */
  @Prop() ariaLabel?: string;

  /** 
   * True for small display.
   */
  @Prop() small?: string;

  /** 
   * Placeholders are optional and have been visually hidden from the component so any text rendered will not have an effect. This prop has been left in the event the design changes in the future. 
   */
  @Prop() placeholder?: string;

  /**
   * Element name attribute.
   */
  @Prop() name: string;

  /**
   * Is the form element required?
   */
  @Prop() required: boolean;

  /**
   * Use autocomplete to improve automated assistance and the use of password managers
   * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  @Prop() autocomplete?: string = 'on';

  /**
   * Initial value for field.
   */
  @Prop() value: string;

  /** 
   * Dropdown options '[{label: string, value: string, selected?: boolean}]' 
   */
  @Prop() options: string;

  /**
   * Is it disabled?
   */
  @Prop() disabled: false;

  /**
   * Are options shown?
   */
  @State() showOptions = false;

  /**
   * Selected option as an object.
   */
  @State() selectedOption: IFormDropdownOption | null;

  @Listen('click', { target: 'window' })
  public handleClick(ev: MouseEvent):void {
    if (this.showOptions && !this.el.contains(ev.target as Node)) {
      this.showOptions = false;
      this.el.shadowRoot.getElementById(this.elemId).focus();
    }
  }

  @Listen('keydown')
  public handleKeyDown(ev: KeyboardEvent):void {
    if (this.showOptions && ev.key === 'Escape') {
      this.showOptions = false;
      this.el.shadowRoot.getElementById(this.elemId).focus();
    }
  }

  @Listen('optionsUpdated')
  onOptionsUpdated(e: CustomEvent):void {
    const optionsString = e.detail;
    if (optionsString && optionsString.length) {
      this.showOptions = true;
    }
  }

  @Watch('options')
  handleOptionsChange(newValue: string):void {
    this.optionsUpdated.emit(newValue);
  }

  /**
   * Event emitted when the text changes in the text field portion of the autocomplete. Data payload contains text string.
   */
  @Event({eventName: 'textChange', bubbles: true}) textChange: EventEmitter<string>;

  /**
   * Event emitted when a value is selected from the options dropdown. Data payload contain option object.
   */
  @Event({eventName: 'dropdownSelectValue', bubbles: true}) dropdownSelectValue: EventEmitter<IFormDropdownOption>;

  /**
   * Event emitted when the dropdown options are updated. Contains new options formatted as a string. Does not bubble outside of component.
   */
  @Event({eventName: 'optionsUpdated'}) optionsUpdated: EventEmitter<string>;

  /**
   * Handle text changes to textfield.
   * @param e Event
   */
  handleTextChange(e: CustomEvent):void {
    e.preventDefault();
    e.stopPropagation();
    this.textChange.emit(e.detail);
  }

  /**
   * Handle selecting an option from the dropdown.
   * @param option 
   */
  handleOptionSelect(option: IFormDropdownOption):void {
    if (option) {
      this.dropdownSelectValue.emit(option);
      this.selectedOption = option;
      this.showOptions = false;
    }
  }

  render():FunctionalComponent {
    let dropDown;
    if (this?.options?.length) {
      dropDown = (<arvest-dropdown-options 
        options={this.options}
        width="inherit"
        scrollEnabled={true} 
        onDropdownSelectValue={(e) => this.handleOptionSelect(e.detail)}
        open={this.showOptions}
      />);
    }
    return (
      <Host>
        <arvest-form-textinput 
          required={this.required}
          autocomplete={this.autocomplete}
          elemId={this.elemId + 'text-input'}
          ariaRequired={this.ariaRequired}
          ariaDescribedBy={this.ariaDescribedBy}
          ariaLabel={this.ariaLabel}
          small={this.small}
          placeholder={this.placeholder}
          name={this.name}
          onTextChange={(e) => this.handleTextChange(e)}
          id={this.elemId}
          value={this.value}
          label={this.label}
          disabled={this.disabled}
        />
        {dropDown}
      </Host>
    );
  }
}
