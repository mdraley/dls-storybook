import { Component, Host, Prop, h } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestCard {
  constructor() {
    this.color = Color.primary01;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "card" },
        h("img", { class: "card-img-top", src: this.cardimgsrc, alt: this.cardimgalt }),
        h("div", { class: "card-body" },
          h("arvest-typography", { class: "card-title", variant: TypographyVariants.h4 }, this.cardtitle),
          h("arvest-typography", { class: "card-text", variant: TypographyVariants.body1 }, this.cardtext),
          h("arvest-button-primary", { color: this.color, label: "Button Description" })))));
  }
  static get is() { return "arvest-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card.css"]
  }; }
  static get properties() { return {
    "cardimgsrc": {
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
        "text": "URL for Image"
      },
      "attribute": "cardimgsrc",
      "reflect": false
    },
    "cardimgalt": {
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
        "text": "Alt text for image"
      },
      "attribute": "cardimgalt",
      "reflect": false
    },
    "cardtitle": {
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
        "text": "Title text"
      },
      "attribute": "cardtitle",
      "reflect": false
    },
    "cardtext": {
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
        "text": "Body text"
      },
      "attribute": "cardtext",
      "reflect": false
    }
  }; }
}
