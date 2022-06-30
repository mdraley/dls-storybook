import { Component, Host, h, Prop } from '@stencil/core';
import { CellVariant, TypographyVariants } from '../../global/ts/enums';
import Styles from './arvest-comparison-table.styles';
import Check from './check.svg';
import Dash from './dash.svg';
export class ArvestComparisonTableCell {
  constructor() {
    this.singleText = () => (h("arvest-typography", { variant: TypographyVariants.caption }, this.data));
    this.bulletList = () => (h("ul", { style: this.getStyles('bulletList') }, Array.isArray(this.data) &&
      this.data.map((item) => h("li", null,
        h("arvest-typography", { variant: TypographyVariants.caption }, item)))));
    this.checkmark = () => (h("div", { style: this.getStyles('icons') },
      h("img", { src: Check, alt: "" })));
    this.dash = () => (h("div", { style: this.getStyles('icons') },
      h("img", { src: Dash, alt: "" })));
    this.nonBulletList = () => (h("ul", { style: this.getStyles('nonBulletList') }, Array.isArray(this.data) &&
      this.data.map((item) => h("li", { style: this.getStyles('nonBulletListItem') },
        h("arvest-typography", { variant: TypographyVariants.caption }, item)))));
    this.na = () => (h("arvest-typography", { variant: TypographyVariants.caption }, "N/A"));
    this.getStyles = (...params) => {
      let useStyle = {};
      // eslint-disable-next-line array-callback-return
      params.map((style) => {
        useStyle = Object.assign(Object.assign({}, useStyle), Styles[style]);
      });
      return useStyle;
    };
    this.switchVariant = () => {
      switch (this.variant) {
        case CellVariant.singleText:
          return this.singleText();
        case CellVariant.bulletList:
          return this.bulletList();
        case CellVariant.checkmark:
          return this.checkmark();
        case CellVariant.dash:
          return this.dash();
        case CellVariant.nonBulletList:
          return this.nonBulletList();
        case CellVariant.na:
          return this.na();
        default:
          return 'sorry this data type does not exist';
      }
    };
  }
  render() {
    return h(Host, null, this.switchVariant());
  }
  static get is() { return "arvest-comparison-table-cell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-comparison-table-cell.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-comparison-table-cell.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "CellVariant",
        "resolved": "CellVariant.bulletList | CellVariant.checkmark | CellVariant.dash | CellVariant.na | CellVariant.nonBulletList | CellVariant.singleText",
        "references": {
          "CellVariant": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false
    },
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | Array<any>",
        "resolved": "any[] | string",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "data",
      "reflect": false
    }
  }; }
}
