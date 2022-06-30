import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestProgress {
  constructor() {
    this.percentage = '';
    this.height = '';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "progress", style: { height: `${this.height ? `${this.height}px` : '1rem'}` } },
        h("div", { class: `progress-bar ${this.isanimated ? 'progress-bar-striped progress-bar-animated' : ''}`, style: { width: `${this.percentage}%` }, role: "progressbar", "aria-valuenow": "0", "aria-valuemin": "0", "aria-valuemax": "100" }, this.haslabel ? `${this.percentage}%` : ''))));
  }
  static get is() { return "arvest-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-progress.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-progress.css"]
  }; }
  static get properties() { return {
    "percentage": {
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
      "attribute": "percentage",
      "reflect": false,
      "defaultValue": "''"
    },
    "height": {
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
      "attribute": "height",
      "reflect": false,
      "defaultValue": "''"
    },
    "haslabel": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "haslabel",
      "reflect": false
    },
    "isanimated": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "isanimated",
      "reflect": false
    }
  }; }
}
