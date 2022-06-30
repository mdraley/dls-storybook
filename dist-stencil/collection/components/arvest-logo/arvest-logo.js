import { Component, Host, h, Prop, State } from '@stencil/core';
import { LogoColor } from '../../global/ts/enums';
import ArvestWhite from '../../assets/logo/Arvest_White.svg';
import ArvestBlack from '../../assets/logo/Arvest_Black.svg';
import ArvestBlue from '../../assets/logo/Arvest_Blue.svg';
export class ArvestLogo {
  constructor() {
    /**
     * Pass in a variant to change the logo color. Options are white = "white",
     *black = "black", and blue = "blue". This is not required. The default is white.
     */
    this.variant = LogoColor.white;
    /** Pass in a url as a string for a redirect. This is optional. */
    this.url = 'https://www.arvest.com/';
    this.currentLogo = ArvestWhite;
    this.getLogo = (variant) => {
      switch (variant) {
        case LogoColor.white:
          return ArvestWhite;
        case LogoColor.black:
          return ArvestBlack;
        case LogoColor.blue:
          return ArvestBlue;
        default:
          return null;
      }
    };
  }
  render() {
    return (h(Host, null,
      h("a", { href: this.url },
        h("img", { src: this.getLogo(this.variant), alt: "Arvest Official Logo" }))));
  }
  static get is() { return "arvest-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-logo.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-logo.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LogoColor",
        "resolved": "LogoColor.black | LogoColor.blue | LogoColor.white",
        "references": {
          "LogoColor": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pass in a variant to change the logo color. Options are white = \"white\",\nblack = \"black\", and blue = \"blue\". This is not required. The default is white."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "LogoColor.white"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pass in a url as a string for a redirect. This is optional."
      },
      "attribute": "url",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/'"
    }
  }; }
  static get states() { return {
    "currentLogo": {}
  }; }
}
