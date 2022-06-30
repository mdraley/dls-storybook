import { Component, Host, h, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestButtonOutline {
  constructor() {
    this.label = 'Button';
  }
  render() {
    return (h(Host, null,
      h("button", { class: "button-outline", "aria-label": this.label },
        h("arvest-typography", { color: Color.white, variant: TypographyVariants.body1 },
          h("slot", null)))));
  }
  static get is() { return "arvest-button-outline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-button-outline.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-button-outline.css"]
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
      "reflect": false,
      "defaultValue": "'Button'"
    }
  }; }
}
