import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';
export class ArvestJumbotron {
  constructor() {
    /** Headline */
    this.headline = 'Hello, world!';
    /** Subhead */
    this.subhead = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
    /** Body */
    this.body = 'It uses utility classes for typography and spacing to space content out within the larger container.';
    /** Button Label */
    this.label = 'Button Description';
    /** Button Color */
    this.buttoncolor = Color.primary01;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "jumbotron" },
        h("h1", { class: "display-4" }, this.headline),
        h("p", { class: "lead" }, this.subhead),
        h("hr", { class: "my-4" }),
        h("p", null, this.body),
        h("arvest-button-primary", { color: this.buttoncolor, label: this.label, role: "button" }))));
  }
  static get is() { return "arvest-jumbotron"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-jumbotron.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-jumbotron.css"]
  }; }
  static get properties() { return {
    "headline": {
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
        "text": "Headline"
      },
      "attribute": "headline",
      "reflect": false,
      "defaultValue": "'Hello, world!'"
    },
    "subhead": {
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
        "text": "Subhead"
      },
      "attribute": "subhead",
      "reflect": false,
      "defaultValue": "'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'"
    },
    "body": {
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
        "text": "Body"
      },
      "attribute": "body",
      "reflect": false,
      "defaultValue": "'It uses utility classes for typography and spacing to space content out within the larger container.'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Button Label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Button Description'"
    },
    "buttoncolor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "Color.accent01 | Color.alertgreen | Color.black | Color.grayscale01 | Color.grayscale02 | Color.grayscale03 | Color.grayscale04 | Color.grayscale05 | Color.grayscale06 | Color.grayscale07 | Color.hover01 | Color.primary01 | Color.primary02 | Color.secondary01 | Color.tabletint | Color.white",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button Color"
      },
      "attribute": "buttoncolor",
      "reflect": false,
      "defaultValue": "Color.primary01"
    }
  }; }
}
