import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';
export class BootstrapAlert {
  constructor() {
    /** Change the color of the component using the Color enum */
    this.color = Color.primary01;
  }
  render() {
    return (h(Host, null,
      h("div", { class: `alert alert-${this.color}`, role: "alert" },
        h("slot", null))));
  }
  static get is() { return "bootstrap-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["bootstrap-alert.css"]
  }; }
  static get styleUrls() { return {
    "$": ["bootstrap-alert.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "Color.accent01 | Color.alertgreen | Color.black | Color.grayscale01 | Color.grayscale02 | Color.grayscale03 | Color.grayscale04 | Color.grayscale05 | Color.grayscale06 | Color.grayscale07 | Color.hover01 | Color.primary01 | Color.primary02 | Color.secondary01 | Color.tabletint | Color.white",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Change the color of the component using the Color enum"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "Color.primary01"
    }
  }; }
}
