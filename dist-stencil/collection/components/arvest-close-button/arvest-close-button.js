import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestCloseButton {
  constructor() {
    this.label = 'Close';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "closeButton__background" },
        h("button", { class: "closeButton" },
          h("arvest-icon", { icon: "times-light", label: this.label, "aria-label": this.label, class: "closeButton__icon" })))));
  }
  static get is() { return "arvest-close-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-close-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-close-button.css"]
  }; }
  static get properties() { return {
    "label": {
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
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Close'"
    }
  }; }
}
