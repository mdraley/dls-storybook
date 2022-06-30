import { Component, Host, h, Prop, Event, Listen, Element, State, Watch } from '@stencil/core';
export class ArvestFormAutocomplete {
  constructor() {
    /**
     * Use autocomplete to improve automated assistance and the use of password managers
     * More info here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    this.autocomplete = 'on';
    /**
     * Are options shown?
     */
    this.showOptions = false;
  }
  handleClick(ev) {
    if (this.showOptions && !this.el.contains(ev.target)) {
      this.showOptions = false;
      this.el.shadowRoot.getElementById(this.elemId).focus();
    }
  }
  handleKeyDown(ev) {
    if (this.showOptions && ev.key === 'Escape') {
      this.showOptions = false;
      this.el.shadowRoot.getElementById(this.elemId).focus();
    }
  }
  onOptionsUpdated(e) {
    const optionsString = e.detail;
    if (optionsString && optionsString.length) {
      this.showOptions = true;
    }
  }
  handleOptionsChange(newValue) {
    this.optionsUpdated.emit(newValue);
  }
  /**
   * Handle text changes to textfield.
   * @param e Event
   */
  handleTextChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.textChange.emit(e.detail);
  }
  /**
   * Handle selecting an option from the dropdown.
   * @param option
   */
  handleOptionSelect(option) {
    if (option) {
      this.dropdownSelectValue.emit(option);
      this.selectedOption = option;
      this.showOptions = false;
    }
  }
  render() {
    var _a;
    let dropDown;
    if ((_a = this === null || this === void 0 ? void 0 : this.options) === null || _a === void 0 ? void 0 : _a.length) {
      dropDown = (h("arvest-dropdown-options", { options: this.options, width: "inherit", scrollEnabled: true, onDropdownSelectValue: (e) => this.handleOptionSelect(e.detail), open: this.showOptions }));
    }
    return (h(Host, null,
      h("arvest-form-textinput", { required: this.required, autocomplete: this.autocomplete, elemId: this.elemId + 'text-input', ariaRequired: this.ariaRequired, ariaDescribedBy: this.ariaDescribedBy, ariaLabel: this.ariaLabel, small: this.small, placeholder: this.placeholder, name: this.name, onTextChange: (e) => this.handleTextChange(e), id: this.elemId, value: this.value, label: this.label, disabled: this.disabled }),
      dropDown));
  }
  static get is() { return "arvest-form-autocomplete"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-autocomplete.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-autocomplete.css"]
  }; }
  static get properties() { return {
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
        "text": "True for small display."
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
        "text": "Element name attribute."
      },
      "attribute": "name",
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
        "text": "Is the form element required?"
      },
      "attribute": "required",
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
    "value": {
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
        "text": "Initial value for field."
      },
      "attribute": "value",
      "reflect": false
    },
    "options": {
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
        "text": "Dropdown options '[{label: string, value: string, selected?: boolean}]'"
      },
      "attribute": "options",
      "reflect": false
    },
    "disabled": {
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
        "text": "Is it disabled?"
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get states() { return {
    "showOptions": {},
    "selectedOption": {}
  }; }
  static get events() { return [{
      "method": "textChange",
      "name": "textChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the text changes in the text field portion of the autocomplete. Data payload contains text string."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "dropdownSelectValue",
      "name": "dropdownSelectValue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when a value is selected from the options dropdown. Data payload contain option object."
      },
      "complexType": {
        "original": "IFormDropdownOption",
        "resolved": "IFormDropdownOption",
        "references": {
          "IFormDropdownOption": {
            "location": "import",
            "path": "../../global/ts/interfaces"
          }
        }
      }
    }, {
      "method": "optionsUpdated",
      "name": "optionsUpdated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the dropdown options are updated. Contains new options formatted as a string. Does not bubble outside of component."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "options",
      "methodName": "handleOptionsChange"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "optionsUpdated",
      "method": "onOptionsUpdated",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
