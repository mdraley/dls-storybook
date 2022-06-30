import { Component, Host, h } from '@stencil/core';
export class ArvestCollapse {
  render() {
    return (h(Host, null,
      h("div", { class: "details-container" },
        h("slot", null))));
  }
  static get is() { return "arvest-collapse"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-collapse.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-collapse.css"]
  }; }
}
