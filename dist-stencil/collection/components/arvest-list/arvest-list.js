import { Component, Element, Host, Prop, h } from '@stencil/core';
export class ArvestList {
  componentWillLoad() {
    this.children = Array.from(this.host.children);
    this.host.innerHTML = '';
  }
  render() {
    return (h(Host, null,
      h("ul", { class: "list-group" }, this.children.map((child, index) => h("li", { class: `list-group-item
                        ${index === parseInt(this.activetag) && 'active'}
                        ${index === parseInt(this.disabledtag) && 'disabled'}
                        list-group-item-${this.color}
                    `, innerHTML: child.outerHTML })))));
  }
  static get is() { return "arvest-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-list.css"]
  }; }
  static get properties() { return {
    "activetag": {
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
        "text": "Index number for active element"
      },
      "attribute": "activetag",
      "reflect": false
    },
    "disabledtag": {
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
        "text": "Index number for disabled element"
      },
      "attribute": "disabledtag",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "Color.accent01 | Color.alertgreen | Color.black | Color.grayscale01 | Color.grayscale02 | Color.grayscale03 | Color.grayscale04 | Color.grayscale05 | Color.grayscale06 | Color.grayscale07 | Color.hover01 | Color.primary01 | Color.primary02 | Color.secondary01 | Color.tabletint | Color.white",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Color for all elements"
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
  static get elementRef() { return "host"; }
}
