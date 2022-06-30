import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestToast {
  constructor() {
    this.show = true;
    this.handleClose = () => this.show = false;
  }
  render() {
    return (h(Host, null,
      h("div", { class: `toast fade ${this.show ? 'show' : ''}`, role: "alert", "aria-live": "assertive", "aria-atomic": "true" },
        h("div", { class: "toast-header" },
          this.imgsrc && h("img", { src: this.imgsrc, class: "rounded mr-2", alt: this.imgalt }),
          h("strong", { class: "mr-auto" }, "Bootstrap"),
          h("small", { class: "text-muted" }, "11 mins ago"),
          h("button", { onClick: this.handleClose, type: "button", class: "ml-2 mb-1 close", "data-dismiss": "toast", "aria-label": "Close" },
            h("span", { "aria-hidden": "true" }, "\u00D7"))),
        h("div", { class: "toast-body" },
          h("slot", null)))));
  }
  static get is() { return "arvest-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-toast.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-toast.css"]
  }; }
  static get properties() { return {
    "show": {
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
      "attribute": "show",
      "reflect": false,
      "defaultValue": "true"
    },
    "imgsrc": {
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
      "attribute": "imgsrc",
      "reflect": false
    },
    "imgalt": {
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
      "attribute": "imgalt",
      "reflect": false
    }
  }; }
}
