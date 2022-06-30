import { Component, Host, h, Prop, State } from '@stencil/core';
import { getIcon } from './utils';
export class ArvestIcon {
  async componentWillLoad() {
    this.iconData = await getIcon(this.icon);
  }
  render() {
    var _a;
    return (h(Host, null,
      h("img", { src: this.iconData.icon, alt: this.alt ? this.alt : this.iconData.alt, "aria-label": (_a = this.label) !== null && _a !== void 0 ? _a : this.label })));
  }
  static get is() { return "arvest-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-icon.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": false
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alt",
      "reflect": false
    }
  }; }
  static get states() { return {
    "iconData": {}
  }; }
}
