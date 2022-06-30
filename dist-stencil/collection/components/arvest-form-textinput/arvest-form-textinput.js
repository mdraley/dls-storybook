import { Component, Element, State, Host, Listen, Prop, h, Event, Watch } from '@stencil/core';
import { FormTextInputType, TypographyVariants } from '../../global/ts/enums';
import Inputmask from 'inputmask';
export class ArvestFormTextInput {
  constructor() {
    /** Type specifies what type of data should be entered into the field. Options are: email, password, text, and number. [Required] */
    this.type = FormTextInputType.text;
    /**
     * Use autocomplete to improve automated assistance and the use of password managers
     * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    this.autocomplete = 'on';
    /**
     * Regex filter for input value. Defaults to filter out special characters and underscores as per Arvest Bad Character List.
     */
    this.filter = /[^a-zA-Z\d\s]/giu;
    /**
     * Used with the mask prop and handleTextMask function to apply a text mask.
     * More info here: https://github.com/RobinHerbots/Inputmask
     */
    this.textMask = Inputmask;
    /** Is the input element required? Defaults to false. */
    this.required = false;
    /** Is the input element disabled? Defaults to false. */
    this.disabled = false;
  }
  /** Function that implements textMask. Commented out is an example of a phone number mask. */
  handleTextMask() {
    if (this.mask) {
      const inputEl = this.el.shadowRoot.querySelector('input');
      this.textMask(this.mask, { 'placeholder': '' }).mask(inputEl);
    }
  }
  handleValueChange(newValue) {
    this._value = newValue;
  }
  handleError() {
    this._error = this.error;
  }
  /** Listen for field focus and set state */
  handleFocus() {
    this.focused = true;
  }
  /** Listen for input on the field and set state */
  handleInput() {
    this.input = true;
  }
  /** Listen for field change and set state according to if the field contains input or not. */
  handleBlur() {
    // Get the value of the input field
    const inputEl = this.el.shadowRoot.querySelector('input').value;
    if (this.input === true && inputEl.length !== 0) {
      // do nothing
    }
    else {
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
  handleKeyUp() {
    // Enter error validation
    this.handleRequired();
  }
  /** Simple error validation function if required state is true */
  handleRequired() {
    const inputEl = this.el.shadowRoot.querySelector('input').value;
    if (this.required && inputEl.length === 0) {
      this._error = this.error;
    }
    else {
      this._error = '';
    }
  }
  handleTextInput(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.filter) {
      this.value = e.target.value.replace(this.filter, '');
      const inputEl = this.el.shadowRoot.querySelector('input');
      // only update if model and view differ 
      if (inputEl.value !== this.value) {
        inputEl.value = this.value;
      }
    }
    else {
      this.value = e.target.value;
    }
    this.textChange.emit(this.value);
  }
  componentWillRender() {
    if (this.value) {
      this._value = this.value;
      const inputEl = this.el.shadowRoot.querySelector('input');
      if (inputEl) {
        inputEl.value = this._value;
        this.input = true;
      }
    }
  }
  render() {
    var _a, _b;
    return (h(Host, null,
      this.label &&
        h("label", { htmlFor: this.elemId, class: this.focused || this._value ? 'label active' : 'label' }, this.label),
      h("input", { id: this.elemId, class: "form-control", type: this.type, "aria-label": this.ariaLabel, "aria-describedby": this.ariaDescribedBy, placeholder: this.placeholder, "aria-required": this.ariaRequired, autocomplete: this.autocomplete, name: this.name, onInput: (e) => {
          this.handleTextInput(e);
          this.handleTextMask();
        }, onKeyDown: (e) => e.stopPropagation(), onKeyPress: (e) => e.stopPropagation(), onKeyUp: (e) => e.stopPropagation(), value: this.value, maxlength: this.maxlength, required: (_a = this.required) !== null && _a !== void 0 ? _a : this.required, disabled: (_b = this.disabled) !== null && _b !== void 0 ? _b : this.disabled }),
      this._error && (h("div", { class: 'textinput-error' },
        h("arvest-typography", { variant: TypographyVariants.caption }, this.error)))));
  }
  static get is() { return "arvest-form-textinput"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-textinput.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-textinput.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FormTextInputType",
        "resolved": "FormTextInputType.email | FormTextInputType.number | FormTextInputType.password | FormTextInputType.search | FormTextInputType.text",
        "references": {
          "FormTextInputType": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type specifies what type of data should be entered into the field. Options are: email, password, text, and number. [Required]"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "FormTextInputType.text"
    },
    "label": {
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
        "text": "Label describes the input field for the user and for screenreaders [Required]"
      },
      "attribute": "label",
      "reflect": false
    },
    "elemId": {
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
        "text": "Give the Element a unique ID to match labels with form fields and enable functionality [Required]"
      },
      "attribute": "elem-id",
      "reflect": false
    },
    "ariaRequired": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The aria-required attribute provides assistive technologies information indicating if a field is required or not. [Required]\n More info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute"
      },
      "attribute": "aria-required",
      "reflect": false
    },
    "ariaDescribedBy": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The aria-describedby attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them.\nMore info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute"
      },
      "attribute": "aria-described-by",
      "reflect": false
    },
    "ariaLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The aria-label attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.\nMore info here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute"
      },
      "attribute": "aria-label",
      "reflect": false
    },
    "small": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "small",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Placeholders are optional and have been visually hidden from the component so any text rendered will not have an effect. This prop has been left in the event the design changes in the future."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "autocomplete": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Use autocomplete to improve automated assistance and the use of password managers\nMore info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
      },
      "attribute": "autocomplete",
      "reflect": false,
      "defaultValue": "'on'"
    },
    "name": {
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "value": {
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
        "text": "Value of the input."
      },
      "attribute": "value",
      "reflect": false
    },
    "filter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "RegExp",
        "resolved": "RegExp",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Regex filter for input value. Defaults to filter out special characters and underscores as per Arvest Bad Character List."
      },
      "defaultValue": "/[^a-zA-Z\\d\\s]/giu"
    },
    "maxlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum number of characters allowed."
      },
      "attribute": "maxlength",
      "reflect": false
    },
    "mask": {
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
        "text": "Prop to describe the text mask to be used."
      },
      "attribute": "mask",
      "reflect": false
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is the input element required? Defaults to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is the input element disabled? Defaults to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "error": {
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
        "text": "Prop for error message."
      },
      "attribute": "error",
      "reflect": false
    }
  }; }
  static get states() { return {
    "focused": {},
    "input": {},
    "textMask": {},
    "_value": {},
    "_error": {}
  }; }
  static get events() { return [{
      "method": "textChange",
      "name": "textChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "textChange event tracks the change in text input. It also checks if there is an active filter on the text input and applies that filter."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "handleValueChange"
    }, {
      "propName": "error",
      "methodName": "handleError"
    }]; }
  static get listeners() { return [{
      "name": "focus",
      "method": "handleFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "input",
      "method": "handleInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "blur",
      "method": "handleBlur",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "handleKeyUp",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
