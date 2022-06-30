import { Component, Host, Prop, h } from '@stencil/core';
import { FormTextInputType } from '../../global/ts/enums';
export class ArvestSearchTextInput {
  constructor() {
    this.type = FormTextInputType.text;
  }
  render() {
    return (h(Host, null,
      this.label &&
        h("label", { htmlFor: this.elemId }, this.label),
      h("input", { type: this.type, class: "form-control", id: this.elemId, "aria-label": this.ariaLabel, "aria-describedby": this.ariaDescribedBy, placeholder: this.placeholder }),
      this.small && h("small", { id: "emailHelp", class: "form-text text-muted" }, this.small)));
  }
  static get is() { return "arvest-search-textinput"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-search-textinput.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-search-textinput.css"]
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
    "elemId": {
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
      "attribute": "elem-id",
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
    "ariaLabel": {
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
      "attribute": "aria-label",
      "reflect": false
    },
    "small": {
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
      "attribute": "small",
      "reflect": false
    },
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FormTextInputType",
        "resolved": "FormTextInputType.email | FormTextInputType.number | FormTextInputType.password | FormTextInputType.search | FormTextInputType.text",
        "references": {
          "FormTextInputType": {
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
      "reflect": false,
      "defaultValue": "FormTextInputType.text"
    }
  }; }
}
