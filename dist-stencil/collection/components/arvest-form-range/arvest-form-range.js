import { Component, Host, Prop, h } from '@stencil/core';
export class ArvestFormRange {
  render() {
    return (h(Host, null,
      h("div", null,
        h("label", null, this.label),
        h("input", { type: "range", class: "form-control-range", id: "formControlRange" })),
      h("slot", null)));
  }
  static get is() { return "arvest-form-range"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-range.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-range.css"]
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
}
