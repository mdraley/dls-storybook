import { Component, Host, Prop, State, h } from '@stencil/core';
export class ArvestFormCheck {
  constructor() {
    this.renderOptions = () => this._options.map((option, index) => (h("label", { class: this.type + (option.disabled ? ' disabled' : '') },
      option.label,
      " ",
      h("small", null, `${option.disabled ? '(disabled)' : ''}`),
      ' ',
      h("input", { type: this.type, value: option.value, name: this.name, id: this.name + index, "aria-describedby": this.ariaDescribedBy, disabled: option.disabled, tabIndex: 0 }),
      h("span", { class: "checkmark" }))));
    this.renderSingleCheck = () => (h("label", { class: this.type + (this.disabled ? ' disabled' : '') },
      this.label,
      " ",
      h("small", null, `${this.disabled ? '(disabled)' : ''}`),
      ' ',
      h("input", { type: this.type, value: this.value, name: this.name, id: this.name, "aria-describedby": this.ariaDescribedBy, disabled: this.disabled, tabIndex: 0 }),
      h("span", { class: "checkmark" })));
  }
  arrayDataWatcher(options) {
    if (typeof options === 'string') {
      this._options = JSON.parse(options);
    }
    else {
      this._options = options;
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.options);
  }
  render() {
    return h(Host, null, Array.isArray(this._options) ? h("div", { class: this.inline && 'form-check-inline' }, this.renderOptions()) : this.renderSingleCheck());
  }
  static get is() { return "arvest-form-check"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-form-check.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-form-check.css"]
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "name": {
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "ariaDescribedBy": {
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
        "text": ""
      },
      "attribute": "aria-described-by",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FormCheckboxType",
        "resolved": "FormCheckboxType.checkbox | FormCheckboxType.radio",
        "references": {
          "FormCheckboxType": {
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
      "attribute": "type",
      "reflect": false
    },
    "value": {
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
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "options": {
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
        "text": ""
      },
      "attribute": "options",
      "reflect": false
    },
    "inline": {
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
        "text": ""
      },
      "attribute": "inline",
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
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_options": {}
  }; }
}
