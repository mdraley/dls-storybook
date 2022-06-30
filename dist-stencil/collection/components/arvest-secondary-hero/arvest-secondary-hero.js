import { Component, Host, h, Prop, Listen, State } from '@stencil/core';
import { TypographyVariants, Color, ViewportBreakpoints } from '../../global/ts/enums';
export class ArvestSecondaryHero {
  constructor() {
    this.header = 'Lorem ipsum.';
    // eslint-disable-next-line consistent-return
    this.calcTypeVariant = (header) => {
      const charNums = header.length;
      if (charNums <= 30) {
        return TypographyVariants.h1;
      }
      else if (charNums > 30 && charNums <= 60) {
        return TypographyVariants.h2;
      }
      else if (charNums > 60) {
        return TypographyVariants.h3;
      }
    };
  }
  calcViewport() {
    this.viewport = window.innerWidth;
  }
  componentWillRender() {
    if (this.header.length > 80) {
      this.header = this.header.slice(0, 80);
    }
    this.viewport = window.innerWidth;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "responsive-image-container" },
          h("arvest-responsive-image", { alt: this.header })),
        h("div", { class: "content-container" },
          h("section", { class: "content-container--grid" },
            h("div", { class: "content-container--header" },
              h("arvest-typography", { variant: this.calcTypeVariant(this.header), color: this.viewport < ViewportBreakpoints.tablet
                  ? Color.black
                  : Color.white }, this.header)),
            h("div", { class: "content-container--button" },
              h("arvest-button-primary", { label: "Button" })))))));
  }
  static get is() { return "arvest-secondary-hero"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-secondary-hero.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-secondary-hero.css"]
  }; }
  static get properties() { return {
    "header": {
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
      "attribute": "header",
      "reflect": false,
      "defaultValue": "'Lorem ipsum.'"
    }
  }; }
  static get states() { return {
    "viewport": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "calcViewport",
      "target": "window",
      "capture": true,
      "passive": true
    }]; }
}
