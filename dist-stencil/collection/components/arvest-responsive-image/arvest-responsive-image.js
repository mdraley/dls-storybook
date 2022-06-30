import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestResponsiveImage {
  constructor() {
    /** Image source link */
    this.src = 'https://www.arvest.com/images/dls/1742x1097/1.jpg';
    this.containerratio = '2.5';
    this.itemratio = '2.5';
  }
  render() {
    return (h(Host, null,
      h("div", { style: { height: `calc(100vw /${this.containerratio})` }, class: "image-container" },
        h("img", { class: "image-item", style: { height: `calc(100vw/${this.itemratio})` }, alt: this.alt, src: this.src }))));
  }
  static get is() { return "arvest-responsive-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-responsive-image.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-responsive-image.css"]
  }; }
  static get properties() { return {
    "alt": {
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
        "text": "Alternative text for accesibility"
      },
      "attribute": "alt",
      "reflect": false
    },
    "src": {
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
        "text": "Image source link"
      },
      "attribute": "src",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/images/dls/1742x1097/1.jpg'"
    },
    "containerratio": {
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
      "attribute": "containerratio",
      "reflect": false,
      "defaultValue": "'2.5'"
    },
    "itemratio": {
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
      "attribute": "itemratio",
      "reflect": false,
      "defaultValue": "'2.5'"
    }
  }; }
}
