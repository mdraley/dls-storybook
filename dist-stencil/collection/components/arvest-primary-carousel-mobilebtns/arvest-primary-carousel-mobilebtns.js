import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';
export class ArvestPrimaryCarouselMobilebtns {
  constructor() {
    this.isactive = false;
    this.color = Color.white;
  }
  render() {
    return (h(Host, null,
      h("button", { style: !this.isactive && { backgroundColor: `var(--${this.color})` }, class: `slide-index-circle
          ${this.isactive && 'slide-index-circle--active'}
          ` })));
  }
  static get is() { return "arvest-primary-carousel-mobilebtns"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-primary-carousel-mobilebtns.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-primary-carousel-mobilebtns.css"]
  }; }
  static get properties() { return {
    "isactive": {
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
      "attribute": "isactive",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": ""
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "Color.white"
    }
  }; }
}
