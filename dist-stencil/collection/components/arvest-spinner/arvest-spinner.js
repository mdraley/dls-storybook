import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestSpinner {
  render() {
    return (h(Host, null,
      h("div", { class: `spinner-border ${this.isreverse && 'spinner-border--white'}`, role: "status" },
        h("span", { class: "sr-only" }, "Loading..."))));
  }
  static get is() { return "arvest-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-spinner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-spinner.css"]
  }; }
  static get properties() { return {
    "isreverse": {
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
      "attribute": "isreverse",
      "reflect": false
    }
  }; }
}
