import { Component, Host, h, State, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestNavMainlink {
  constructor() {
    /** If true, change to active styles */
    this.isactive = false;
    /** If true, change font colors for light mode */
    this.islightmode = false;
    this.mobile = false;
    this.isunderline = false;
    this.setHover = () => {
      this.color = this.islightmode ? Color.black : Color.white;
    };
    this.setDefault = () => {
      this.color = this.islightmode ? Color.black : Color.white;
    };
  }
  componentWillLoad() {
    this.color = this.islightmode ? Color.black : Color.white;
    this.activeColor = this.islightmode ? Color.black : Color.white;
  }
  render() {
    return (h(Host, null,
      h("arvest-typography", { variant: this.mobile ? TypographyVariants.mobileNavigation : TypographyVariants.navigation, color: this.isactive ? this.activeColor : this.color, onMouseEnter: this.setHover, onMouseLeave: this.setDefault },
        h("slot", null)),
      this.isactive && h("div", { class: "custom-text-decoration" })));
  }
  static get is() { return "arvest-nav-mainlink"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-nav-mainlink.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-nav-mainlink.css"]
  }; }
  static get properties() { return {
    "isactive": {
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
        "text": "If true, change to active styles"
      },
      "attribute": "isactive",
      "reflect": false,
      "defaultValue": "false"
    },
    "islightmode": {
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
        "text": "If true, change font colors for light mode"
      },
      "attribute": "islightmode",
      "reflect": false,
      "defaultValue": "false"
    },
    "mobile": {
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
      "attribute": "mobile",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isunderline": {},
    "color": {},
    "activeColor": {}
  }; }
}
