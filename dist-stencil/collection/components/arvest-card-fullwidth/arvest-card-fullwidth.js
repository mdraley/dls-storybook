import { Component, Host, h, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class arvestCardFullWidth {
  constructor() {
    /** Show the Headline? */
    this.showheadline = true;
    /** Show the Body Text? */
    this.showbody = true;
    /** Show the CTA Link? */
    this.showcta = true;
    /** Headline */
    this.headline = 'Lorem ipsum dolor sit, headline';
    /** Body Text */
    this.body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget loten.';
    /** Label for the CTA */
    this.ctalabel = 'Get Info';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "content" },
          this.showheadline &&
            h("arvest-typography", { variant: TypographyVariants.h3, color: Color.black, class: "headline" }, this.headline),
          this.showbody &&
            h("arvest-typography", { variant: TypographyVariants.subheading, color: Color.black, class: "subhead" }, this.body),
          this.showcta &&
            h("arvest-button-tertiary", { label: this.ctalabel, role: "button", class: "cta" })))));
  }
  static get is() { return "arvest-card-fullwidth"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card-fullwidth.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card-fullwidth.css"]
  }; }
  static get properties() { return {
    "showheadline": {
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
        "text": "Show the Headline?"
      },
      "attribute": "showheadline",
      "reflect": false,
      "defaultValue": "true"
    },
    "showbody": {
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
        "text": "Show the Body Text?"
      },
      "attribute": "showbody",
      "reflect": false,
      "defaultValue": "true"
    },
    "showcta": {
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
        "text": "Show the CTA Link?"
      },
      "attribute": "showcta",
      "reflect": false,
      "defaultValue": "true"
    },
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
      "defaultValue": "'Lorem ipsum dolor sit, headline'"
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
        "text": "Body Text"
      },
      "attribute": "body",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget loten.'"
    },
    "ctalabel": {
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
        "text": "Label for the CTA"
      },
      "attribute": "ctalabel",
      "reflect": false,
      "defaultValue": "'Get Info'"
    }
  }; }
}
