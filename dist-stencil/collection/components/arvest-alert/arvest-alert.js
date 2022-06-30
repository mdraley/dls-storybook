import { Component, Host, h, Prop } from '@stencil/core';
export class ArvestAlert {
  constructor() {
    /** Banner: passing this as true will display the alert as a banner at the top of the page */
    this.banner = false;
    /** Dismissed */
    this.dismissed = false;
  }
  // Set appropriate icon based on the alert type
  setIcon() {
    switch (this.type) {
      case 'alert':
        return h("arvest-icon", { icon: "exclamation-circle-light", label: "Alert", class: "icon alert" });
      case 'caution':
        return h("arvest-icon", { icon: "exclamation-triangle-light", label: "Caution", class: "icon caution" });
      case 'confirmation':
        return h("arvest-icon", { icon: "check-circle-light", label: "Confirmation", class: "icon confirmation" });
      case 'info':
        return null;
      default:
        return null;
    }
  }
  dismissAlert() {
    this.dismissed = true;
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.banner ? 'alert banner' : 'alert inline', role: "alert", "aria-hidden": this.dismissed ? 'true' : 'false' },
        h("div", { class: "alert-inner" },
          h("div", { class: "visual-indicator" }, this.setIcon()),
          h("div", { class: "message" },
            h("slot", null)),
          h("div", { class: "dismiss" },
            h("arvest-close-button", { onClick: () => this.dismissAlert(), label: "Close Alert" }))))));
  }
  static get is() { return "arvest-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-alert.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-alert.css"]
  }; }
  static get properties() { return {
    "type": {
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
        "text": "Options for the Alert component\nThe types of available alerts are\ndefault, alert, confirmation, caution and info.\nThe styles and icons are tied to that selection.\n[Required]"
      },
      "attribute": "type",
      "reflect": false
    },
    "banner": {
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
        "text": "Banner: passing this as true will display the alert as a banner at the top of the page"
      },
      "attribute": "banner",
      "reflect": false,
      "defaultValue": "false"
    },
    "dismissed": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Dismissed"
      },
      "attribute": "dismissed",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
