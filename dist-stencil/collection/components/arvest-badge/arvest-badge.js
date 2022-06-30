import { Component, Host, Prop, h } from '@stencil/core';
import { BadgeColor } from '../../global/ts/enums';
export class ArvestBadge {
  constructor() {
    /** Background color of the badge */
    this.color = BadgeColor.label;
  }
  render() {
    return (h(Host, null,
      h("span", { class: `badge${typeof this.color === 'string' ? ` badge-${this.color}` : ''}` },
        h("slot", null))));
  }
  static get is() { return "arvest-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-badge.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-badge.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "BadgeColor",
        "resolved": "BadgeColor.counter | BadgeColor.label",
        "references": {
          "BadgeColor": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Background color of the badge"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "BadgeColor.label"
    }
  }; }
}
