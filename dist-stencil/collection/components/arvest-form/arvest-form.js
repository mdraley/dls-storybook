import { Component, Host, Prop, h, Event, State, Listen, Element } from '@stencil/core';
import { ButtonType, Color } from '../../global/ts/enums';
export class ArvestForm {
  constructor() {
    this.buttonText = 'Submit';
  }
  /**
   * Listens to textChange event emitted from arvest-form-textinput component.
   * Then sets value of event to state.
   */
  handleChildrenText(e) {
    this._value = e.detail;
  }
  /**
   * Handles form submit event.
   * */
  handleFormSubmit() {
    this.formSubmit.emit(this._value);
  }
  render() {
    return (h(Host, null,
      h("form", { class: `${this.inline ? 'form-inline' : ''}`, action: this.action, method: this.method },
        h("slot", null),
        h("arvest-button-primary", { type: ButtonType.submit, color: Color.primary01, issmall: true, label: this.buttonText, onClick: () => this.handleFormSubmit() }))));
  }
  static get is() { return "arvest-form"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form.css"]
  }; }
  static get properties() { return {
    "inline": {
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
        "text": ""
      },
      "attribute": "inline",
      "reflect": false
    },
    "buttonText": {
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
      "attribute": "button-text",
      "reflect": false,
      "defaultValue": "'Submit'"
    },
    "action": {
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
        "text": "Submit URL for action attribute."
      },
      "attribute": "action",
      "reflect": false
    },
    "method": {
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
        "text": "Method for action prop ex. \"get\" or \"post\"."
      },
      "attribute": "method",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_value": {}
  }; }
  static get events() { return [{
      "method": "formSubmit",
      "name": "formSubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Form submit event."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "textChange",
      "method": "handleChildrenText",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
