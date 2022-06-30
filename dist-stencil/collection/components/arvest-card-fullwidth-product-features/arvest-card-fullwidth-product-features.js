import { Component, Host, h, Prop, State, Listen, Element } from '@stencil/core';
import { TypographyVariants, ViewportBreakpoints } from '../../global/ts/enums';
export class ArvestCardFullwidthProductFeatures {
  constructor() {
    /** ID component */
    this.identifier = 'arvest-fullwidth-card-cta-icon';
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
    this.handleLegendOpen = () => {
      const element = this.el.shadowRoot.getElementById(this.identifier + '-feature-overlay');
      element.setAttribute('visible', 'true');
      element.addEventListener('clickClose', () => this.handleLegendClose());
    };
    this.handleLegendClose = () => {
      const element = this.el.shadowRoot.getElementById(this.identifier + '-feature-overlay');
      element.setAttribute('visible', 'false');
    };
  }
  handleResize(e) {
    const window = e.target;
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
  }
  componentWillRender() {
    this._description = this.description.substring(0, 100);
    this._listItems = this.listItems.split('|').slice(0, 5);
    this._icons = this.icons.split('|').slice(0, 8);
    this._iconTips = this.iconTips.split('|').slice(0, 8);
  }
  render() {
    return (h(Host, null,
      h("div", { class: "card-container" },
        h("div", { class: "card-copy" },
          h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.cardTitle),
          h("arvest-typography", { variant: TypographyVariants.body1, class: "card-description" }, this.description)),
        h("div", { class: "card-list" },
          h("div", { class: "icons" },
            h("div", { class: "icon-list" }, this._icons.map((icon, index) => {
              if (this.isMobile) {
                return (h("div", { class: "icon-wrapper" },
                  h("arvest-icon", { icon: icon })));
              }
              return (h("arvest-tooltip", { message: this._iconTips[index], arrow: true },
                h("div", { class: "icon-wrapper" },
                  h("arvest-icon", { icon: icon }))));
            })),
            this.isMobile ? (h("arvest-icon", { icon: 'info-circle-light', class: "info", onClick: this.handleLegendOpen })) : (h("arvest-icon", { icon: 'info-circle-light', class: "info" }))),
          this.listDescription && (h("arvest-typography", { variant: TypographyVariants.body1, class: "list-description" }, this.listDescription)),
          h("div", { class: "feature-list" },
            h("ul", null, this._listItems.map((item) => {
              return (h("li", null,
                h("arvest-typography", { variant: TypographyVariants.body2 }, item)));
            })))),
        h("div", { class: "card-cta" },
          this.secondaryCtaTitle && (h("a", { href: this.secondaryCtaUrl, class: "cta-secondary" },
            h("arvest-button-secondary", { label: this.secondaryCtaTitle, issmall: true }))),
          this.primaryCtaTitle && (h("a", { href: this.primaryCtaUrl, class: "cta-primary" },
            h("arvest-button-primary", { label: this.primaryCtaTitle, issmall: true }))))),
      this.isMobile && (h("arvest-overlay", { id: this.identifier + '-feature-overlay' },
        h("arvest-modal", { id: this.identifier, heading: 'Legend', size: 'small' },
          h("div", { class: "legend" }, this._icons.map((icon, index) => {
            return (h("div", { class: "legend-icon" },
              h("div", { class: "icon-wrapper" },
                h("arvest-icon", { icon: icon })),
              h("arvest-typography", { variant: TypographyVariants.body1 }, this._iconTips[index])));
          })))))));
  }
  static get is() { return "arvest-card-fullwidth-product-features"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card-fullwidth-product-features.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card-fullwidth-product-features.css"]
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
        "text": "ID component"
      },
      "attribute": "identifier",
      "reflect": false,
      "defaultValue": "'arvest-fullwidth-card-cta-icon'"
    },
    "cardTitle": {
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
        "text": "Main title for the component"
      },
      "attribute": "card-title",
      "reflect": false
    },
    "description": {
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
        "text": "Description text"
      },
      "attribute": "description",
      "reflect": false
    },
    "listDescription": {
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
        "text": "Optional list dscription text"
      },
      "attribute": "list-description",
      "reflect": false
    },
    "listItems": {
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
        "text": "List items to be displayed (pipe separated, no spaces)"
      },
      "attribute": "list-items",
      "reflect": false
    },
    "icons": {
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
        "text": "Icon names to be displayed (pipe separated, no spaces)"
      },
      "attribute": "icons",
      "reflect": false
    },
    "iconTips": {
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
        "text": "Icon links, in same order as icons (pipe separated, no spaces)"
      },
      "attribute": "icon-tips",
      "reflect": false
    },
    "primaryCtaTitle": {
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
        "text": "Primary CTA title"
      },
      "attribute": "primary-cta-title",
      "reflect": false
    },
    "primaryCtaUrl": {
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
        "text": "Primary CTA URL"
      },
      "attribute": "primary-cta-url",
      "reflect": false
    },
    "secondaryCtaTitle": {
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
        "text": "Secondary CTA title"
      },
      "attribute": "secondary-cta-title",
      "reflect": false
    },
    "secondaryCtaUrl": {
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
        "text": "Secondary CTA URL"
      },
      "attribute": "secondary-cta-url",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_description": {},
    "_listItems": {},
    "_icons": {},
    "_iconTips": {},
    "isMobile": {}
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": true,
      "passive": true
    }]; }
}
