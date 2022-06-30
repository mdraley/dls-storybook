import { Component, Host, h, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestAdFourCol {
  constructor() {
    this.defaultbg = '/assets/images/pattern.svg';
    /** Change the background color. Color options: cobalt, ocean, navy. Default is cobalt. */
    this.color = 'cobalt';
    /** Optional sizes are small and large */
    this.size = '';
    /** Turn the CTA on/off */
    this.showcta = true;
    /** CTA / Button text */
    this.ctatitle = 'Button';
    /** CTA / Button URL */
    this.url = 'https://www.arvest.com';
    /** Change the background image using bgimage and a full URL as a string. Example: <arvest-ad-four-col bgimage="https://www.arvest.com/someimage.jpg">  The default background is a geometric pattern. */
    this.bgimage = this.defaultbg;
    /** Change the opacity of the background image. Use a decimal between 0-1. Default value is 0.5 (50%). [optional] */
    this.opacity = '0.5';
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'container ' + this.color + ' ' + this.size },
        h("div", { class: "bgimage", style: { 'background-image': `url(${this.bgimage})`, 'opacity': `${this.opacity}` } }),
        h("div", { class: "content" },
          h("div", { class: "headline" },
            h("arvest-typography", { variant: TypographyVariants.h3, color: Color.white },
              h("slot", null))),
          this.showcta
            ? h("div", { class: "cta" },
              h("arvest-button-secondary", { label: this.ctatitle, issmall: true, isad: true }))
            : ''))));
  }
  static get is() { return "arvest-ad-four-col"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-ad-four-col.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-ad-four-col.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "defaultbg": {
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
      "attribute": "defaultbg",
      "reflect": false,
      "defaultValue": "'/assets/images/pattern.svg'"
    },
    "color": {
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
        "text": "Change the background color. Color options: cobalt, ocean, navy. Default is cobalt."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'cobalt'"
    },
    "size": {
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
        "text": "Optional sizes are small and large"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Turn the CTA on/off"
      },
      "attribute": "showcta",
      "reflect": false,
      "defaultValue": "true"
    },
    "ctatitle": {
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
        "text": "CTA / Button text"
      },
      "attribute": "ctatitle",
      "reflect": false,
      "defaultValue": "'Button'"
    },
    "url": {
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
        "text": "CTA / Button URL"
      },
      "attribute": "url",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com'"
    },
    "bgimage": {
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
        "text": "Change the background image using bgimage and a full URL as a string. Example: <arvest-ad-four-col bgimage=\"https://www.arvest.com/someimage.jpg\">  The default background is a geometric pattern."
      },
      "attribute": "bgimage",
      "reflect": false,
      "defaultValue": "this.defaultbg"
    },
    "opacity": {
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
        "text": "Change the opacity of the background image. Use a decimal between 0-1. Default value is 0.5 (50%). [optional]"
      },
      "attribute": "opacity",
      "reflect": false,
      "defaultValue": "'0.5'"
    }
  }; }
}
