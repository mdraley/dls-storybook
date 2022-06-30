import { Component, h, Host, Listen, Prop, State } from '@stencil/core';
import { TooltipCta, TooltipPosition, TooltipTrigger, TypographyVariants } from '../../global/ts/enums';
export class ArvestTooltip {
  constructor() {
    /** Set the position of the tooltip.
     *  Options:  (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
     * **/
    this.position = TooltipPosition.topCenter;
    /** Show or hide the tooltip arrow.  **/
    this.arrow = false;
    /** Show or hide the tooltip arrow.  **/
    this.trigger = TooltipTrigger.hover;
    this.show = false;
    this.onHover = () => {
      if (this.trigger === TooltipTrigger.hover) {
        this.showMessage();
      }
    };
    this.onClick = () => {
      if (this.trigger === TooltipTrigger.click) {
        this.showMessage();
      }
    };
    this.showMessage = () => {
      this.show = true;
    };
    this.closeMessage = () => {
      this.show = false;
    };
  }
  handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.show ? this.closeMessage() : this.showMessage();
    }
    if (ev.key === 'Escape') {
      this.closeMessage();
    }
  }
  render() {
    return (h(Host, { onMouseOver: this.onHover, onClick: this.onClick, onMouseLeave: this.closeMessage, onBlur: this.closeMessage, tabIndex: 0 },
      h("div", { class: 'tooltip' + (this.trigger === TooltipTrigger.click ? ' click-trigger' : '') },
        h("slot", null),
        this.show &&
          h("div", { class: 'tooltip-text ' + this.position + (this.arrow ? ' arrow' : ''), role: "tooltip" },
            this.message,
            this.ctaType === TooltipCta.text && (h("a", { href: this.ctaUrl, class: "text-cta" },
              h("arvest-typography", { variant: TypographyVariants.navigation }, this.ctaTitle))),
            this.ctaType === TooltipCta.button && (h("a", { href: this.ctaUrl, class: "button-cta" },
              h("arvest-typography", { variant: TypographyVariants.navigation }, this.ctaTitle)))))));
  }
  static get is() { return "arvest-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-tooltip.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TooltipPosition",
        "resolved": "TooltipPosition.bottomCenter | TooltipPosition.bottomLeft | TooltipPosition.bottomRight | TooltipPosition.topCenter | TooltipPosition.topLeft | TooltipPosition.topRight",
        "references": {
          "TooltipPosition": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Set the position of the tooltip.\nOptions:  (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)\n*"
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "TooltipPosition.topCenter"
    },
    "arrow": {
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
        "text": "Show or hide the tooltip arrow.  *"
      },
      "attribute": "arrow",
      "reflect": false,
      "defaultValue": "false"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TooltipTrigger",
        "resolved": "TooltipTrigger.click | TooltipTrigger.hover",
        "references": {
          "TooltipTrigger": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Show or hide the tooltip arrow.  *"
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "TooltipTrigger.hover"
    },
    "message": {
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
        "text": "Tooltip body copy/message (no limit)"
      },
      "attribute": "message",
      "reflect": false
    },
    "ctaType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TooltipCta",
        "resolved": "TooltipCta.button | TooltipCta.text",
        "references": {
          "TooltipCta": {
            "location": "import",
            "path": "../../global/ts/enums"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Type of CTA enabled?\nOptions:  (text, button)\n*"
      },
      "attribute": "cta-type",
      "reflect": false
    },
    "ctaTitle": {
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
        "text": "CTA title\nOptions:  (button or text)\n*"
      },
      "attribute": "cta-title",
      "reflect": false
    },
    "ctaUrl": {
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
        "text": "CTA full URL  *"
      },
      "attribute": "cta-url",
      "reflect": false
    }
  }; }
  static get states() { return {
    "show": {}
  }; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
