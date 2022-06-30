import { Component, Element, State, Host, Listen, Prop, h, Event, EventEmitter, Watch, FunctionalComponent } from '@stencil/core';
import { FormTextInputType, TypographyVariants } from '../../global/ts/enums';
import Inputmask from 'inputmask';

@Component({
  'tag': 'arvest-form-textinput',
  'styleUrl': 'arvest-form-textinput.css',
  'shadow': true
})

export class ArvestFormTextInput {
    /** Type specifies what type of data should be entered into the field. Options are: email, password, text, and number. [Required] */
    @Prop() type: FormTextInputType = FormTextInputType.text;

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

    /** */
    @Prop() small?: string;

    /** Placeholders are optional and have been visually hidden from the component so any text rendered will not have an effect. This prop has been left in the event the design changes in the future. */
    @Prop() placeholder?: string;

    /**
     * Use autocomplete to improve automated assistance and the use of password managers
     * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    @Prop() autocomplete?: string = 'on';

    @Prop() name: string;

    /**
     * Use Password Rules for input fields to assist password managers and improve security
     *  More info here: https://developer.apple.com/password-rules/
     */
    // @Prop() passwordrules?: string;

    /** Gain access to elements */ 
    @Element() el: HTMLElement;

    /** Is the element focused? */ 
    @State() focused: boolean;

    /** Has there been input on the field */ 
    @State() input: boolean;

    /** Value of the input. */ 
    @Prop({mutable: true}) value: string;

    /** 
     * Regex filter for input value. Defaults to filter out special characters and underscores as per Arvest Bad Character List.
     */ 
    @Prop() filter = /[^a-zA-Z\d\s]/giu;

    /** Maximum number of characters allowed. */ 
    @Prop() maxlength: number;

    /** Prop to describe the text mask to be used. */
    @Prop() mask: string;

    /** 
     * Used with the mask prop and handleTextMask function to apply a text mask.
     * More info here: https://github.com/RobinHerbots/Inputmask
     */
    @State() textMask = Inputmask;

    /** Function that implements textMask. Commented out is an example of a phone number mask. */
    handleTextMask(): void {
      if (this.mask) {
        const inputEl = this.el.shadowRoot.querySelector('input');
        this.textMask(this.mask, {'placeholder': ''}).mask(inputEl);
      } 
    }

    /** Is the input element required? Defaults to false. */
    @Prop() required = false;

    /** Is the input element disabled? Defaults to false. */
    @Prop() disabled = false;

    @Watch('value')
    handleValueChange(newValue: string): void {
      this._value = newValue;
    }

    @State() _value: string;

    /** Prop for error message. */
    @Prop({mutable: true}) error: string;

    @State() _error: string;

    @Watch('error')
    handleError(): void {
      this._error = this.error;
    }

    /** Listen for field focus and set state */ 
    @Listen('focus')
    handleFocus():void {
      this.focused = true;
    }

    /** Listen for input on the field and set state */ 
    @Listen('input')
    handleInput():void {
      this.input = true;
    }

    /** Listen for field change and set state according to if the field contains input or not. */ 
    @Listen('blur')
    handleBlur (): void {
      // Get the value of the input field
      const inputEl = this.el.shadowRoot.querySelector('input').value;
      if (this.input === true && inputEl.length !== 0) {
        // do nothing
      } else {
        this.focused = false;
        if (this.required) {
          this._error = this.error;
        }
      }
    }
    /*
     * Keyboard events are ready to be set up if needed
     * @Listen('keydown')
     * handleKeyDown(ev: KeyboardEvent) {
     *     console.log(ev);
     * }
     */

    /** Listen for keyup and apply error validation */
    @Listen('keyup')
    handleKeyUp(): void {
      // Enter error validation
      this.handleRequired();
    }

    /** Simple error validation function if required state is true */
    handleRequired(): void {
      const inputEl = this.el.shadowRoot.querySelector('input').value;
      if (this.required && inputEl.length === 0) {
        this._error = this.error;
      } else {
        this._error = '';
      }
    }

    /** 
     * textChange event tracks the change in text input. It also checks if there is an active filter on the text input and applies that filter.
     */
    @Event({eventName: 'textChange', bubbles: true}) textChange: EventEmitter<string>;

    handleTextInput(e):void {
      e.stopPropagation();
      e.preventDefault();
      if (this.filter) {
        this.value = e.target.value.replace(this.filter, '');
        const inputEl = this.el.shadowRoot.querySelector('input');
        // only update if model and view differ 
        if (inputEl.value !== this.value) {
          inputEl.value = this.value;
        }
      } else {
        this.value = e.target.value;
      }
      this.textChange.emit(this.value);
    }

    componentWillRender(): void {
      if (this.value) {
        this._value = this.value;
        const inputEl = this.el.shadowRoot.querySelector('input');
        if (inputEl) {
          inputEl.value = this._value;
          this.input = true;
        }
      }
    }

    render():FunctionalComponent {

      return (
        <Host>
          {this.label &&
                    <label
                      htmlFor={this.elemId}
                      class={this.focused || this._value ? 'label active' : 'label'}
                    >
                      {this.label}
                    </label>
          }
          <input
            id={this.elemId}
            class="form-control"
            type={this.type}
            aria-label={this.ariaLabel}
            aria-describedby={this.ariaDescribedBy} placeholder={this.placeholder}
            aria-required={this.ariaRequired}
            autocomplete={this.autocomplete}
            name={this.name}
            onInput={(e) => {
              this.handleTextInput(e); 
              this.handleTextMask();
            }}
            onKeyDown={(e) => e.stopPropagation()}
            onKeyPress={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            value={this.value}
            maxlength={this.maxlength}
            required={this.required ?? this.required}
            disabled={this.disabled ?? this.disabled}
          />
          {this._error && (
            <div class={'textinput-error'}>
              <arvest-typography variant={TypographyVariants.caption}>
                {this.error}
              </arvest-typography>
            </div>
          )}
        </Host>
      );
    }
}
