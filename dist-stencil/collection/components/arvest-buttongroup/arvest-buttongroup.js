import { Component, Host, Prop, h } from '@stencil/core';
export class ArvestButtongroup {
  render() {
    return (h(Host, null,
      h("div", { class: `btn-group btn-group-${this.color}`, role: "group", "aria-label": `${this.ariaLabel}` },
        h("slot", null))));
  }
  static get is() { return "arvest-buttongroup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-buttongroup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-buttongroup.css"]
  }; }
  static get properties() { return {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Change the color of the component using the Color enum"
      },
      "attribute": "color",
      "reflect": false
    },
    "ariaLabel": {
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
        "text": "Aria Label for screen readers [Required]"
      },
      "attribute": "aria-label",
      "reflect": false
    }
  }; }
}
