import { Component, Host, Listen, State, h, Prop, Element, Event } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestDropdown {
  constructor() {
    /** ID for the dropdown **/
    this.identifier = 'arvestDropdown';
    /** Set the width of the dropdown. Can be any valid value for the width CSS property. **/
    this.width = '240px';
    /** Enable fixed-height, scrollable dropdown **/
    this.scrollEnabled = true;
    this.show = false;
    this.clickToggle = () => {
      if (!this.isDisabled) {
        this.show = !this.show;
      }
    };
    this.handleOptionSelect = (option) => {
      this.dropdownSelectValue.emit(option);
    };
    this.handleTriggerKeyDown = (ev) => {
      if (!this.isDisabled) {
        if ((!this.show && (ev.key === 'Enter' || ev.key === 'Space' || ev.key === 'ArrowUp' || ev.key === 'ArrowDown'))) {
          this.clickToggle();
        }
        else if ((this.show && (ev.key === 'Enter' || ev.key === 'Space'))) {
          this.clickToggle();
          this.el.shadowRoot.getElementById(this.identifier).focus();
        }
      }
    };
  }
  handleClick(ev) {
    if (this.show && !this.el.contains(ev.target)) {
      this.clickToggle();
      this.el.shadowRoot.getElementById(this.identifier).focus();
    }
  }
  handleKeyDown(ev) {
    if (this.show && ev.key === 'Escape') {
      this.clickToggle();
      this.el.shadowRoot.getElementById(this.identifier).focus();
    }
  }
  handleDropdownSelectValue(e) {
    this.selected = e.detail;
    this.el.shadowRoot.getElementById(this.identifier).focus();
  }
  componentWillLoad() {
    this.clickToggle = this.clickToggle.bind(this);
    this.isDisabled = (this.disabled === 'true');
  }
  handleClickOnDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clickToggle();
  }
  render() {
    return (h(Host, null,
      h("div", { id: this.identifier, class: 'select-wrapper' + (this.show ? ' open' : '') + (this.isDisabled ? ' disabled' : ''), style: { 'width': this.width }, onClick: (e) => this.handleClickOnDropdown(e), onKeyDown: (event) => this.handleTriggerKeyDown(event), tabIndex: this.isDisabled ? -1 : 0, "aria-label": 'select', role: "tabpanel" },
        h("div", { class: 'select' + (this.show ? ' open' : '') },
          h("div", { class: 'select-trigger' + (this.show ? ' open' : '') },
            h("div", null,
              h("label", { htmlFor: this.identifier, class: 'dropdown-label' + (this.show ? ' show' : '') + ((this.selected) ? ' selected' : '') }, this.label),
              h("div", { class: 'selected-option' }, this.selected && (h("arvest-typography", { variant: TypographyVariants.body1 }, this.selected.label)))),
            h("arvest-icon", { class: "dropdown-icon", style: {
                transform: `rotate(${this.show ? '0' : '180deg'})`,
                transition: '0.2s ease-in-out'
              }, icon: "chevron-up-light" })),
          h("arvest-dropdown-options", { options: this.options, width: this.width, scrollEnabled: this.scrollEnabled, onDropdownSelectValue: (e) => this.handleOptionSelect(e.detail), open: this.show })))));
  }
  static get is() { return "arvest-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-dropdown.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-dropdown.css"]
  }; }
  static get properties() { return {
    "identifier": {
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
        "text": "ID for the dropdown *"
      },
      "attribute": "identifier",
      "reflect": false,
      "defaultValue": "'arvestDropdown'"
    },
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
        "text": "Dropdown label text"
      },
      "attribute": "label",
      "reflect": false
    },
    "options": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Dropdown options '[{label: string, value: string, selected?: boolean}]' *"
      },
      "attribute": "options",
      "reflect": false
    },
    "width": {
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
        "text": "Set the width of the dropdown. Can be any valid value for the width CSS property. *"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'240px'"
    },
    "scrollEnabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Enable fixed-height, scrollable dropdown *"
      },
      "attribute": "scroll-enabled",
      "reflect": false,
      "defaultValue": "true"
    },
    "disabled": {
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
        "text": "Disable dropdown"
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get states() { return {
    "show": {},
    "selected": {},
    "isDisabled": {}
  }; }
  static get events() { return [{
      "method": "dropdownSelectValue",
      "name": "dropdownSelectValue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when an options is chosen from the dropdown. Data payload is an object: { label: string, value: string }."
      },
      "complexType": {
        "original": "IFormDropdownOption",
        "resolved": "IFormDropdownOption",
        "references": {
          "IFormDropdownOption": {
            "location": "import",
            "path": "../../global/ts/interfaces"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "dropdownSelectValue",
      "method": "handleDropdownSelectValue",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
