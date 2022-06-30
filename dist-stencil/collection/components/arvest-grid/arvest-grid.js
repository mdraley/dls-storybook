import { Component, Host, h, Element } from '@stencil/core';
export class ArvestGrid {
  constructor() {
    this.makeContainer = (child) => h("div", { innerHTML: child.outerHTML });
    this.renderChildren = (children, renderFun) => children.map((child) => renderFun(child));
  }
  componentWillLoad() {
    console.log('Child Nodes', Array.from(this.host.childNodes));
    this.children = Array.from(this.host.childNodes);
    this.host.innerHTML = '';
    console.log(this.children);
  }
  render() {
    return (h(Host, null, this.renderChildren(this.children, this.makeContainer)));
  }
  static get is() { return "arvest-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-grid.css"]
  }; }
  static get elementRef() { return "host"; }
}
