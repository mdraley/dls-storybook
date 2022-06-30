import { Component, Host, h } from '@stencil/core';
export class ArvestFooterContent {
  render() {
    return (h(Host, null,
      h("slot", { name: "header" }),
      h("section", null,
        h("ul", { class: "footer-list" },
          h("slot", { name: "list-item" })))));
  }
  static get is() { return "arvest-footer-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-footer-content.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-footer-content.css"]
  }; }
}
