import { Component, Host, h, Prop, Event } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestModal {
  onClickCloseHandler(e) {
    this.clickClose.emit(e);
  }
  render() {
    return (h(Host, null,
      h("section", { class: `modal modal--${this.size}`, role: "dialog", "aria-labelledby": "id", "aria-modal": "true" },
        h("header", { class: "modal__header" },
          h("arvest-typography", { class: "modal__title", variant: TypographyVariants.h4 }, this.heading),
          h("arvest-close-button", { class: "modal__closeButton", onClick: (e) => this.onClickCloseHandler(e) })),
        h("div", { class: "modal__body" },
          h("slot", null)))));
  }
  static get is() { return "arvest-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-modal.css"]
  }; }
  static get properties() { return {
    "heading": {
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
        "text": "Title at the top of the modal  *"
      },
      "attribute": "heading",
      "reflect": false
    },
    "size": {
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
        "text": "Modal size (small, large) *"
      },
      "attribute": "size",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "clickClose",
      "name": "clickClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the close button on the modal is clicked."
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
}
