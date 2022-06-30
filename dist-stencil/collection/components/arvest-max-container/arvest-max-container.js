import { Component, Host, h } from '@stencil/core';
export class ArvestMaxContainer {
  render() {
    return (h(Host, null,
      h("div", { class: "max-container" },
        h("slot", null))));
  }
  static get is() { return "arvest-max-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-max-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-max-container.css"]
  }; }
}
