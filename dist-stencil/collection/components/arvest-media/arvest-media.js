import { Component, Host, Prop, h } from '@stencil/core';
export class ArvestMedia {
  constructor() {
    this.src = 'https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg';
    this.alt = 'Alt text for the image';
    this.heading = 'Media heading';
    this.bodytext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim suscipit risus sit amet hendrerit. Nunc efficitur mi massa, at eleifend lacus aliquet id. Aliquam venenatis nunc id sodales dapibus. Sed in consectetur lacus, in consectetur quam.';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "media" },
        h("img", { src: this.src, class: "mr-3", alt: this.alt }),
        h("div", { class: "media-body" },
          h("h5", { class: "mt-0" }, this.heading),
          h("p", null, this.bodytext)))));
  }
  static get is() { return "arvest-media"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-media.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-media.css"]
  }; }
  static get properties() { return {
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
        "text": ""
      },
      "attribute": "src",
      "reflect": false,
      "defaultValue": "'https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg'"
    },
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
        "text": ""
      },
      "attribute": "alt",
      "reflect": false,
      "defaultValue": "'Alt text for the image'"
    },
    "heading": {
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
      "attribute": "heading",
      "reflect": false,
      "defaultValue": "'Media heading'"
    },
    "bodytext": {
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
      "attribute": "bodytext",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim suscipit risus sit amet hendrerit. Nunc efficitur mi massa, at eleifend lacus aliquet id. Aliquam venenatis nunc id sodales dapibus. Sed in consectetur lacus, in consectetur quam.'"
    }
  }; }
}
