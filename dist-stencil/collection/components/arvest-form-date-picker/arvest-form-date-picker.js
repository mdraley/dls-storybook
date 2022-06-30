import { Component, Host, h, Element, Prop, State, Event, Listen, Watch } from '@stencil/core';
import { defineCustomElements } from '@duetds/date-picker/custom-element';
import { TypographyVariants } from '../../global/ts/enums';
import { DateTime } from 'luxon';
import Inputmask from 'inputmask';
defineCustomElements(window);
export class ArvestFormDatePicker {
  constructor() {
    /**
     * Name for the input element
     */
    this.name = 'arvest-date-picker';
    /**
     * Component id
     */
    this.identifier = 'arvest-date-picker';
    /**
     * Is the input element disabled?
     */
    this.disabled = false;
    /**
     * Is the input element required?
     */
    this.required = false;
    /**
     * Minimum date available to pick (ex. 1900-01-01)
     */
    this.min = '1900-01-01';
    /**
     * Maximum date available to pick (ex. 1900-01-01)
     */
    this.max = new Date().toISOString().split('T')[0];
    /**
     * Define the label for the component
     */
    this.label = 'Choose a date';
    /**
     * Define the placeholder value for the input
     */
    this.placeholder = 'mm/dd/yyyy';
    this.focused = false;
    this.isValid = false;
  }
  handleValueChange(newValue) {
    this._value = newValue;
  }
  handleChange(event) {
    this.datePickerChange.emit(event);
    if (event.detail.valueAsDate) {
      this.error = null;
      this.focused = true;
      this._placeholder = this.placeholder;
    }
    if (!event.detail.valueAsDate) {
      this.isValid = false;
    }
  }
  handleFocus(event) {
    this.focused = true;
    this._placeholder = this.placeholder;
    this.datePickerFocus.emit(event);
  }
  handleBlur(event) {
    const currentValue = this.el.querySelector('input').value;
    const date = DateTime.fromFormat(currentValue, 'M/d/yyyy');
    this.isValid = !!date.isValid;
    if (!this.isValid) {
      this.error = 'Please enter a valid date.';
    }
    if (this.isValid) {
      this.error = null;
    }
    if (!currentValue) {
      this.focused = false;
      this._placeholder = '';
      if (!this.required) {
        this.error = null;
      }
    }
    this.datePickerBlur.emit(event);
  }
  handleOpen(event) {
    this.datePickerOpen.emit(event);
  }
  handleClose(event) {
    this.datePickerClose.emit(event);
  }
  /** Function that implements InputMask. */
  handleTextMask() {
    const inputEl = this.el.querySelector('input');
    Inputmask('99/99/9999', { 'placeholder': this._placeholder }).mask(inputEl);
  }
  componentWillRender() {
    if (this.value) {
      this._value = this.value;
    }
  }
  render() {
    var _a, _b, _c, _d, _e;
    const DATE_FORMAT = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u;
    const dateAdapter = {
      parse(value = '', createDate) {
        const matches = value.match(DATE_FORMAT);
        if (matches) {
          const date = createDate(matches[3], matches[1], matches[2]);
          return date;
        }
        return null;
      },
      format(date) {
        const day = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
        const month = ((date.getMonth() + 1) < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
        const formattedDate = `${month}/${day}/${date.getFullYear()}`;
        return formattedDate;
      }
    };
    const localization = {
      locale: 'en-US',
      buttonLabel: 'Choose date',
      placeholder: this._placeholder,
      selectedDateMessage: 'Selected date is',
      prevMonthLabel: 'Previous month',
      nextMonthLabel: 'Next month',
      monthSelectLabel: 'Month',
      yearSelectLabel: 'Year',
      closeLabel: 'Close window',
      keyboardInstruction: 'You can use arrow keys to navigate dates',
      calendarHeading: 'Choose a date',
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    };
    return (h(Host, null,
      h("label", { class: 'date-picker' + (this.focused ? ' focused' : ''), htmlFor: "duet-date-picker" }, this.label),
      h("duet-date-picker", { name: this.name, identifier: this.identifier, min: this.min, max: (_a = this.max) !== null && _a !== void 0 ? _a : this.max, role: (_b = this.role) !== null && _b !== void 0 ? _b : this.role, value: (_c = this._value) !== null && _c !== void 0 ? _c : this._value, onKeyUp: () => {
          this.handleTextMask();
        }, dateAdapter: dateAdapter, localization: localization, ref: (el) => this.inputRef = el, required: (_d = this.required) !== null && _d !== void 0 ? _d : this.required, disabled: (_e = this.disabled) !== null && _e !== void 0 ? _e : this.disabled }),
      this.error && (h("div", { class: 'date-picker-error' },
        h("arvest-typography", { variant: TypographyVariants.caption }, this.error)))));
  }
  static get is() { return "arvest-form-date-picker"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-date-picker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-date-picker.css"]
  }; }
  static get properties() { return {
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
        "text": "Name for the input element"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "'arvest-date-picker'"
    },
    "identifier": {
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
        "text": "Component id"
      },
      "attribute": "identifier",
      "reflect": false,
      "defaultValue": "'arvest-date-picker'"
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
        "text": "Is the input element disabled?"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Is the input element required?"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "min": {
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
        "text": "Minimum date available to pick (ex. 1900-01-01)"
      },
      "attribute": "min",
      "reflect": false,
      "defaultValue": "'1900-01-01'"
    },
    "max": {
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
        "text": "Maximum date available to pick (ex. 1900-01-01)"
      },
      "attribute": "max",
      "reflect": false,
      "defaultValue": "new Date().toISOString().split('T')[0]"
    },
    "role": {
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
        "text": "Assign a role to the component"
      },
      "attribute": "role",
      "reflect": false
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
        "text": "Define the label for the component"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Choose a date'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define the placeholder value for the input"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "'mm/dd/yyyy'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Element value (ex. 1900-01-01)"
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_value": {},
    "error": {},
    "focused": {},
    "_placeholder": {},
    "isValid": {}
  }; }
  static get events() { return [{
      "method": "datePickerChange",
      "name": "datePickerChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the date picker date changes."
      },
      "complexType": {
        "original": "CustomEvent",
        "resolved": "CustomEvent<any>",
        "references": {
          "CustomEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "datePickerFocus",
      "name": "datePickerFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the user focuses into the date picker."
      },
      "complexType": {
        "original": "CustomEvent",
        "resolved": "CustomEvent<any>",
        "references": {
          "CustomEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "datePickerBlur",
      "name": "datePickerBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the user leaves the date picker."
      },
      "complexType": {
        "original": "CustomEvent",
        "resolved": "CustomEvent<any>",
        "references": {
          "CustomEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "datePickerOpen",
      "name": "datePickerOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when calendar display of date picker opens."
      },
      "complexType": {
        "original": "CustomEvent",
        "resolved": "CustomEvent<any>",
        "references": {
          "CustomEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "datePickerClose",
      "name": "datePickerClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when calendar display of date picker closes."
      },
      "complexType": {
        "original": "CustomEvent",
        "resolved": "CustomEvent<any>",
        "references": {
          "CustomEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "handleValueChange"
    }]; }
  static get listeners() { return [{
      "name": "duetChange",
      "method": "handleChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "duetFocus",
      "method": "handleFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "duetBlur",
      "method": "handleBlur",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "duetOpen",
      "method": "handleOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "duetClose",
      "method": "handleClose",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
