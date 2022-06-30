import { Component, h, Host, Prop, Event } from '@stencil/core';
export class ArvestButtonTwoUp {
  constructor() {
    /** Use small button variant?  **/
    this.isSmall = false;
  }
  /**
   * Primary button click handler.
   * @param e Event
   */
  onClickPrimaryButton(e) {
    this.clickPrimary.emit(e);
  }
  /**
   * Secondary button click handler.
   * @param e Event
   */
  onClickSecondaryButton(e) {
    this.clickSecondary.emit(e);
  }
  render() {
    return (h(Host, null,
      h("a", { href: this.secondaryUrl, class: 'cta-secondary' + (this.isSmall ? ' small' : ''), onClick: (e) => this.onClickSecondaryButton(e) },
        h("arvest-button-secondary", { class: 'cta-secondary-button' + (this.isSmall ? ' small' : ''), label: this.secondaryTitle, issmall: this.isSmall, tabIndex: -1 })),
      h("a", { href: this.primaryUrl, onClick: (e) => this.onClickPrimaryButton(e) },
        h("arvest-button-primary", { label: this.primaryTitle, issmall: this.isSmall, tabIndex: -1 }))));
  }
  static get is() { return "arvest-button-two-up"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-button-two-up.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-button-two-up.css"]
  }; }
  static get properties() { return {
    "primaryTitle": {
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
        "text": "Primary button title.  *"
      },
      "attribute": "primary-title",
      "reflect": false
    },
    "primaryUrl": {
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
        "text": "Primary button url.  *"
      },
      "attribute": "primary-url",
      "reflect": false
    },
    "secondaryTitle": {
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
        "text": "Secondary button title.  *"
      },
      "attribute": "secondary-title",
      "reflect": false
    },
    "secondaryUrl": {
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
        "text": "Secondary button url.  *"
      },
      "attribute": "secondary-url",
      "reflect": false
    },
    "isSmall": {
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
        "text": "Use small button variant?  *"
      },
      "attribute": "is-small",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clickPrimary",
      "name": "clickPrimary",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emit event when primary button is clicked *"
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "clickSecondary",
      "name": "clickSecondary",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emit event when secondary button is clicked *"
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
}
