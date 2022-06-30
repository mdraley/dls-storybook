import { Component, Host, Prop, State, h } from '@stencil/core';
import { TypographyVariants, Color } from '../../global/ts/enums';
import Styles from './arvest-button-secondary.styles';
export class ArvestButtonSecondary {
  constructor() {
    /** Text inside the button. Must not be more than 25 characters. [Required] */
    this.label = 'Button';
    this.color = Color.secondary01;
    this.labelsize = 25;
    this.getStyles = (...params) => {
      let useStyle = {};
      // eslint-disable-next-line array-callback-return
      params.map((style) => {
        useStyle = Object.assign(Object.assign({}, useStyle), Styles[style]);
      });
      return useStyle;
    };
    this.getButtonStyle = () => {
      let buttonStyle = this.getStyles(`${(this.disabled || this.isloading) && 'disabled'}`, `${this.issmall && 'small'}`, `${this.isad && 'ad'}`);
      if (this.width) {
        buttonStyle = Object.assign(Object.assign({}, buttonStyle), { width: this.width + 'px' });
      }
      return buttonStyle;
    };
    this.setSecondaryColor = () => {
      this.color = Color.secondary01;
    };
    this.setHoverColor = () => {
      this.color = Color.hover01;
    };
  }
  componentWillRender() {
    this._label = this.label;
    if (this.label.length > this.labelsize) {
      this._label = this.label.slice(0, this.labelsize);
    }
  }
  render() {
    return (h(Host, null,
      h("button", { "aria-label": this.label, onMouseDown: (e) => e.preventDefault(), onMouseOver: this.setHoverColor, onMouseLeave: this.setSecondaryColor, tabIndex: this.disabled || this.isloading ? -1 : 0, class: `${this.disabled || this.isloading ? 'default' : 'button'} ${this.isad ? ' ad' : ''}`, type: this.type, part: "btn-custom", style: this.getButtonStyle() },
        h("arvest-typography", { variant: this.issmall
            ? TypographyVariants.navigation
            : TypographyVariants.action, color: this.disabled || this.isloading ? Color.grayscale03 : this.color },
          h("div", { style: this.getStyles(`${this.issmall && 'smallContent'}`), class: "button-content" },
            this.isloading &&
              h("div", { class: "button-spinner" },
                h("arvest-spinner", null)),
            this.isloading ? 'Loading...' : this._label)))));
  }
  static get is() { return "arvest-button-secondary"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-button-secondary.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-button-secondary.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "Text inside the button. Must not be more than 25 characters. [Required]"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Button'"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonType",
        "resolved": "ButtonType.button | ButtonType.reset | ButtonType.submit",
        "references": {
          "ButtonType": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Change the type of the component using the ButtonType enum"
      },
      "attribute": "type",
      "reflect": false
    },
    "disabled": {
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
        "text": "If true, disable mouse events"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "isloading": {
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
        "text": "If true, spinner for loading"
      },
      "attribute": "isloading",
      "reflect": false
    },
    "issmall": {
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
        "text": "If true, button size will be smaller"
      },
      "attribute": "issmall",
      "reflect": false
    },
    "isad": {
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
        "text": "If true, button will use ad style"
      },
      "attribute": "isad",
      "reflect": false
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Custom button width"
      },
      "attribute": "width",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_label": {},
    "color": {}
  }; }
}
