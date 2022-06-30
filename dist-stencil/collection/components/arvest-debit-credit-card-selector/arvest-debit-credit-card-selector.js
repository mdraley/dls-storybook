import { Component, Host, Prop, h, State, Watch } from '@stencil/core';
export class ArvestDebitCreditCardSelector {
  constructor() {
    /** Button CTA text */
    this.selectButton = 'Select';
  }
  setBgimage(newValue) {
    this._bgimage = newValue;
  }
  componentWillLoad() {
    this._bgimage = this.bgimage;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "bgimage", style: { 'background-image': `url(${this._bgimage})` } }),
        h("div", { class: "content" },
          this.showLink && this.showLabel ? (h("div", { class: "cta" },
            h("a", { class: "link", href: "#" }, this.linkcta),
            h("label", { class: "card-name" }, this.label))) : (h("div", null,
            this.showLink ? h("a", { class: "link__alone", href: "#" }, this.linkcta) : '',
            this.showLabel ? h("label", { class: "card-name" }, this.label) : '')),
          h("div", { class: "button-cta" }, this.showButton ? h("arvest-button-primary", { class: "select-button", label: this.selectButton, issmall: true }) : '')))));
  }
  static get is() { return "arvest-debit-credit-card-selector"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-debit-credit-card-selector.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-debit-credit-card-selector.css"]
  }; }
  static get properties() { return {
    "linkcta": {
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
        "text": "Link CTA text"
      },
      "attribute": "linkcta",
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
        "text": "Label text for card"
      },
      "attribute": "label",
      "reflect": false
    },
    "selectButton": {
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
        "text": "Button CTA text"
      },
      "attribute": "select-button",
      "reflect": false,
      "defaultValue": "'Select'"
    },
    "showLink": {
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
        "text": "Turn Link on/off"
      },
      "attribute": "show-link",
      "reflect": false
    },
    "showLabel": {
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
        "text": "Turn Label on/off"
      },
      "attribute": "show-label",
      "reflect": false
    },
    "showButton": {
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
        "text": "Turn Button on/off"
      },
      "attribute": "show-button",
      "reflect": false
    },
    "bgimage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "URL for background image"
      },
      "attribute": "bgimage",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_bgimage": {}
  }; }
  static get watchers() { return [{
      "propName": "bgimage",
      "methodName": "setBgimage"
    }]; }
}
