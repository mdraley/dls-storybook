import { Component, Host, h } from '@stencil/core';
export class ArvestModalFooter {
  render() {
    return (h(Host, null,
      h("footer", { class: "modal-footer" },
        h("slot", null))));
  }
  static get is() { return "arvest-modal-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-modal-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-modal-footer.css"]
  }; }
}
