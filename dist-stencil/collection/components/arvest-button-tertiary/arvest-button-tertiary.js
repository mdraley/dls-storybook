import { Component, Host, Prop, State, h } from '@stencil/core';
import { TypographyVariants, Color } from '../../global/ts/enums';
import Styles from './arvest-button-tertiary.styles';
export class ArvestButtonTertiary {
  constructor() {
    /** Text inside the button. Must not be more than 30 characters [Required] */
    this.label = 'Button';
    this.color = Color.secondary01;
    this.labelsize = 30;
    this.getStyles = (...params) => {
      let useStyle = {};
      // eslint-disable-next-line array-callback-return
      params.map((style) => {
        useStyle = Object.assign(Object.assign({}, useStyle), Styles[style]);
      });
      return useStyle;
    };
    this.setDefaultColot = () => {
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
      h("button", { "aria-label": this.label, onMouseDown: (e) => e.preventDefault(), onMouseOver: this.setHoverColor, onMouseLeave: this.setDefaultColot, class: `${this.disabled ? 'default' : 'button'}`, type: this.type, part: "btn-custom", style: this.getStyles(`${this.disabled && 'disabled'}`) },
        h("div", { class: "button-content--wrapper" },
          h("arvest-typography", { variant: TypographyVariants.action, color: this.disabled ? Color.grayscale03 : this.color },
            h("div", { class: "button-content" }, this._label)),
          this.disabled
            ? h("arvest-icon", { icon: "arrowRightSolidDisabled", class: "icon" })
            : h("arvest-icon", { icon: "arrowRightSolid", class: "icon" })))));
  }
  static get is() { return "arvest-button-tertiary"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-button-tertiary.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-button-tertiary.css"]
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
        "text": "Text inside the button. Must not be more than 30 characters [Required]"
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
    }
  }; }
  static get states() { return {
    "_label": {},
    "color": {}
  }; }
}
