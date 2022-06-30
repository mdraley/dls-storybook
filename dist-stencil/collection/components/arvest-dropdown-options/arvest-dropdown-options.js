import { Component, Host, h, Prop, State, Event, Watch } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestDropdownOptions {
  constructor() {
    /**
     * Set the width of the dropdown, can be any valid css value for the width property.
     */
    this.width = '240px';
    /**
     * Enable fixed-height, scrollable dropdown
     */
    this.scrollEnabled = true;
    /**
     * Unique identifier.
     */
    this.identifier = 'arvestDropdownOptions';
    /**
     * Set true to open options.
     */
    this.open = false;
    /**
     * Handle choosing an option with keyboard.
     * @param ev KeyboardEvent
     * @param index Index of option.
     */
    this.handleOptionKeyDown = (ev, index) => {
      if (this.open && (ev.key === 'Enter' || ev.key === 'Space')) {
        this.handleOptionSelect(index);
      }
    };
    /**
     * Handle selecting an option.
     * @param index Index of option.
     */
    this.handleOptionSelect = (index) => {
      this.selected = index;
      const option = this._options[index];
      this.dropdownSelectValue.emit(option);
    };
  }
  setNavData(newValue) {
    this.arrayDataWatcher(newValue);
  }
  handleSelectionChange(selection) {
    this.dropdownSelectValue.emit(this._options[selection]);
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.options);
    // Check for pre-selected value and set it - return plain options array
    this._options = this._options.map((item, index) => {
      if (item.selected) {
        this.selected = index;
      }
      return { label: item.label, value: item.value };
    });
  }
  /**
   * Set this._options array from options string, set selected, if one is selected.
   * @param options String
   */
  arrayDataWatcher(options) {
    if (typeof options === 'string') {
      this._options = JSON.parse(options);
    }
    else {
      this._options = options;
    }
    this.selected = this._options.findIndex((option) => option.selected);
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'options' + (this.scrollEnabled ? ' scroll' : '') + (this.open ? ' open' : ''), style: { 'width': this.width }, role: 'tablist' }, this._options.map((option, index) => {
        return (h("button", { id: this.identifier + '-option-' + index, key: index, class: 'option', onClick: () => this.handleOptionSelect(index), onKeyDown: (event) => this.handleOptionKeyDown(event, index), "data-value": option.value, role: "tab", "aria-selected": (this.selected === index) ? 'true' : 'false' },
          h("arvest-typography", { variant: ((this.selected === index) ? TypographyVariants.body2 : TypographyVariants.body1) }, option.label)));
      }))));
  }
  static get is() { return "arvest-dropdown-options"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-dropdown-options.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-dropdown-options.css"]
  }; }
  static get properties() { return {
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
        "text": "Dropdown options as a string '[{label: string, value: string, selected?: boolean}]'"
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
        "text": "Set the width of the dropdown, can be any valid css value for the width property."
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
        "text": "Enable fixed-height, scrollable dropdown"
      },
      "attribute": "scroll-enabled",
      "reflect": false,
      "defaultValue": "true"
    },
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
        "text": "Unique identifier."
      },
      "attribute": "identifier",
      "reflect": false,
      "defaultValue": "'arvestDropdownOptions'"
    },
    "open": {
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
        "text": "Set true to open options."
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "selected": {},
    "_options": {}
  }; }
  static get events() { return [{
      "method": "dropdownSelectValue",
      "name": "dropdownSelectValue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a dropdown option is selected. Data payload contains selected option."
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
    }, {
      "method": "optionsUpdated",
      "name": "optionsUpdated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when options are changed. Data payload contains array of new options."
      },
      "complexType": {
        "original": "IFormDropdownOption[]",
        "resolved": "IFormDropdownOption[]",
        "references": {
          "IFormDropdownOption": {
            "location": "import",
            "path": "../../global/ts/interfaces"
          }
        }
      }
    }]; }
  static get watchers() { return [{
      "propName": "options",
      "methodName": "setNavData"
    }, {
      "propName": "selected",
      "methodName": "handleSelectionChange"
    }]; }
}
