import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestComparisonTableHeadercard {
  render() {
    return (h(Host, null,
      h("div", { class: `card-container ${this.hascolor && 'card-container--withcolor'}` },
        h("div", { class: "card-content" },
          h("arvest-typography", { variant: TypographyVariants.h4 }, this.cardTitle),
          h("arvest-typography", { variant: TypographyVariants.caption }, this.description)),
        h("arvest-button-primary", { label: this.cta, issmall: true }))));
  }
  static get is() { return "arvest-comparison-table-headercard"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-comparison-table-headercard.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-comparison-table-headercard.css"]
  }; }
  static get properties() { return {
    "cardTitle": {
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
      "attribute": "card-title",
      "reflect": false
    },
    "description": {
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
      "attribute": "description",
      "reflect": false
    },
    "cta": {
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
      "attribute": "cta",
      "reflect": false
    },
    "hascolor": {
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
      "attribute": "hascolor",
      "reflect": false
    }
  }; }
}
