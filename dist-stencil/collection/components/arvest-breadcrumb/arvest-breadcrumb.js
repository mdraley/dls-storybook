import { Component, Host, Prop, State, h } from '@stencil/core';
export class ArvestBreadcrumb {
  constructor() {
    this.collapsed = true;
  }
  arrayDataWatcher(links) {
    if (typeof links === 'string') {
      this._links = JSON.parse(links);
    }
    else {
      this._links = links;
    }
  }
  renderLinks(link, index) {
    // Handle more than five links (all but the last) (collapsed)
    if (this._links.length > 5 && index < this._links.length - 1) {
      if (this.collapsed && index === 1) {
        return (h("li", { class: "breadcrumb-item" },
          h("a", { class: "ellipsis", href: "javascript:void(0)", onClick: () => {
              this.collapsed = false;
            } }, "...")));
      }
      else if (this.collapsed && (index === 0 || index === this._links.length - 2)) {
        return (h("li", { class: "breadcrumb-item" },
          h("a", { href: link.url }, link.title)));
      }
      else if (!this.collapsed) {
        return (h("li", { class: "breadcrumb-item" },
          h("a", { href: link.url }, link.title)));
      }
      return null;
    }
    // Handle less than 5 links (all but the last)
    if (this._links.length <= 5 && index < this._links.length - 1) {
      return (h("li", { class: "breadcrumb-item" },
        h("a", { href: link.url }, link.title)));
    }
    // Handle the last link
    return (h("li", { class: "breadcrumb-item active", "aria-current": "page" }, link.title));
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.links);
  }
  render() {
    return (h(Host, null,
      h("nav", { "aria-label": "breadcrumb" },
        h("ol", { class: "breadcrumb" }, this._links.map((link, index) => this.renderLinks(link, index))))));
  }
  static get is() { return "arvest-breadcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-breadcrumb.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-breadcrumb.css"]
  }; }
  static get properties() { return {
    "links": {
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
        "text": "Links is an array of routes, it has the following structure: [{\"title\":\"string label\",\"url\":\"string url\"},]"
      },
      "attribute": "links",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_links": {},
    "collapsed": {}
  }; }
}
