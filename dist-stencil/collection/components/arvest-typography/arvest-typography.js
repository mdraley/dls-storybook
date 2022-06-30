import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import { TypographyVariants, ViewportBreakpoints } from '../../global/ts/enums';
import * as Styles from './arvest-typography.styles';
export class ArvestTypography {
  constructor() {
    /** Typography styles */
    this.variant = TypographyVariants.body1;
    this.getDeviceStyles = (viewport) => {
      let deviceStyles = {};
      if (viewport < ViewportBreakpoints.mobile) {
        deviceStyles = Styles.StylesSmallDev;
      }
      else if (viewport >= ViewportBreakpoints.mobile &&
        viewport < ViewportBreakpoints.desktop) {
        deviceStyles = Styles.StylesMedDev;
      }
      else if (viewport >= ViewportBreakpoints.desktop) {
        deviceStyles = Styles.StylesLargeDev;
      }
      return deviceStyles;
    };
    this.getStyles = (...params) => {
      let useStyle = {};
      const StylesCollection = Object.assign(Object.assign({}, this.getDeviceStyles(this.viewport)), Styles.StylesColors);
      // eslint-disable-next-line array-callback-return
      params.map((style) => {
        useStyle = Object.assign(Object.assign({}, useStyle), StylesCollection[style]);
      });
      return useStyle;
    };
  }
  calcViewport() {
    this.viewport = window.innerWidth;
  }
  handleRender() {
    switch (this.variant) {
      case TypographyVariants.h1:
        return (h("h1", { style: this.getStyles(`${this.color}`, `${TypographyVariants.h1}`), class: 'h1 ' },
          h("slot", null)));
      case TypographyVariants.h2:
        return (h("h2", { style: this.getStyles(`${this.color}`, `${TypographyVariants.h2}`), class: 'h2 ' },
          h("slot", null)));
      case TypographyVariants.h3:
        return (h("h3", { style: this.getStyles(`${this.color}`, `${TypographyVariants.h3}`), class: `h3 ${this.color ? this.color : ''} ` },
          h("slot", null)));
      case TypographyVariants.h4:
        return (h("h4", { style: this.getStyles(`${this.color}`, `${TypographyVariants.h4}`), class: `h4 ${this.color ? this.color : ''} ` },
          h("slot", null)));
      case TypographyVariants.subheading:
        return (h("h5", { style: this.getStyles(`${this.color}`, `${TypographyVariants.subheading}`), class: 'subheading' },
          h("slot", null)));
      case TypographyVariants.body1:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.body1}`), class: 'body1' },
          h("slot", null)));
      case TypographyVariants.body2:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.body2}`), class: 'body2' },
          h("slot", null)));
      case TypographyVariants.action:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.action}`), class: 'action' },
          h("slot", null)));
      case TypographyVariants.navigation:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.navigation}`), class: 'navigation' },
          h("slot", null)));
      case TypographyVariants.mobileNavigation:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.mobileNavigation}`), class: 'mobileNavigation' },
          h("slot", null)));
      case TypographyVariants.labels:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.labels}`), class: 'labels' },
          h("slot", null)));
      case TypographyVariants.caption:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.caption}`), class: 'caption' },
          h("slot", null)));
      default:
        return (h("p", { style: this.getStyles(`${this.color}`, `${TypographyVariants.body1}`), class: 'body1' },
          h("slot", null)));
    }
  }
  componentWillRender() {
    this.viewport = window.innerWidth;
  }
  render() {
    return h(Host, null, this.handleRender());
  }
  static get is() { return "arvest-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-typography.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-typography.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TypographyVariants",
        "resolved": "TypographyVariants.action | TypographyVariants.body1 | TypographyVariants.body2 | TypographyVariants.caption | TypographyVariants.h1 | TypographyVariants.h2 | TypographyVariants.h3 | TypographyVariants.h4 | TypographyVariants.labels | TypographyVariants.mobileNavigation | TypographyVariants.navigation | TypographyVariants.subheading",
        "references": {
          "TypographyVariants": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Typography styles"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "TypographyVariants.body1"
    },
    "color": {
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
        "text": "Font Color"
      },
      "attribute": "color",
      "reflect": false
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
