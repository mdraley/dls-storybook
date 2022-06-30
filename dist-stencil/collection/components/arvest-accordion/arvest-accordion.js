import { Component, Host, Prop, h, Listen, State } from '@stencil/core';
import { TypographyVariants, ViewportBreakpoints, AccordionType } from '../../global/ts/enums';
export class ArvestAccordion {
  constructor() {
    this.activeCol = 0;
    this.isopen = false;
    this.viewport = window.innerWidth;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
    this.handleToggle = () => {
      this.isopen = !this.isopen;
    };
    this.renderRowTitles = () => this.rowtitles.map((rowtitle) => (h("div", { class: "grid-cell" },
      h("arvest-typography", { variant: TypographyVariants.body2 }, rowtitle))));
    this.renderGridTable = () => (h("div", { class: "grid-table", style: {
        gridTemplateRows: `repeat(${this.rowtitles.length}, auto)`
      } },
      this.renderRowTitles(),
      this.cols.map((col, index) => col.map((datacell) => (h("div", { class: `grid-cell ${index % 2 < 1 && 'color-background'}` },
        h("arvest-comparison-table-cell", { variant: datacell.variant, data: datacell.data })))))));
    this.renderMobileGridTable = () => (h("div", { class: "grid-table", style: {
        gridTemplateRows: `repeat(${this.rowtitles.length}, auto)`
      } },
      this.renderRowTitles(),
      this.cols[this.activeCol].map((datacell) => h("div", { class: `grid-cell ${'color-background'}` },
        h("arvest-comparison-table-cell", { variant: datacell.variant, data: datacell.data })))));
    this.getTitleStyle = () => {
      if (this.type === AccordionType.content && this.isopen) {
        return 'accordion-title-content open';
      }
      else if (this.type === AccordionType.content) {
        return 'accordion-title-content';
      }
      else if (this.type === AccordionType.tableSimple) {
        return 'accordion-title-table-simple';
      }
      else if (this.type === AccordionType.nav) {
        return 'accordion-title-nav';
      }
      else if (this.type === AccordionType.mobileNav) {
        return 'accordion-title-mobile-nav';
      }
      return 'accordion-title-table';
    };
    this.getSentenceCase = (title) => {
      const newTitle = title.toLowerCase();
      return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
    };
  }
  handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.handleToggle();
    }
  }
  calcViewport() {
    this.viewport = window.innerWidth;
  }
  componentWillLoad() {
    if (this.type === AccordionType.table) {
      this.isopen = true;
    }
  }
  componentWillRender() {
    this.viewport = window.innerWidth;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
  }
  render() {
    return (h(Host, null,
      h("div", { onClick: this.handleToggle, class: this.getTitleStyle(), tabIndex: 0 },
        this.type === AccordionType.table && (h("arvest-typography", { variant: TypographyVariants.h4 }, this.accordiontitle)),
        this.type === AccordionType.tableSimple && (h("arvest-typography", { variant: TypographyVariants.h4 }, this.getSentenceCase(this.accordiontitle))),
        this.type === AccordionType.content && (h("arvest-typography", { variant: TypographyVariants.action }, this.getSentenceCase(this.accordiontitle))),
        this.type === AccordionType.nav && (h("arvest-typography", { variant: TypographyVariants.navigation }, this.accordiontitle)),
        this.type === AccordionType.mobileNav && (h("arvest-typography", { variant: TypographyVariants.mobileNavigation }, this.accordiontitle)),
        h("arvest-icon", { class: "accordion-icon", style: {
            transform: `rotate(${this.isopen ? '0' : '180deg'})`,
            transition: '0.2s ease-in-out'
          }, icon: "chevron-up-light" })),
      this.type === AccordionType.table && (h("div", { class: 'table-container' + (this.isopen ? ' open' : ''), style: {
          transform: `scaleY(${this.isopen ? '1' : '0'})`,
          opacity: `${this.isopen ? '1' : '0'}`,
          maxHeight: `${this.isopen ? '100%' : '0px'}`
        } }, this.ismobile ? this.renderMobileGridTable() : this.renderGridTable())),
      this.type === AccordionType.tableSimple && (h("div", { class: 'accordion-table-simple' + (this.isopen ? ' open' : ''), style: {
          transform: `scaleY(${this.isopen ? '1' : '0'})`,
          opacity: `${this.isopen ? '1' : '0'}`,
          maxHeight: `${this.isopen ? '100%' : '0px'}`
        } },
        h("arvest-typography", { variant: TypographyVariants.body1 },
          h("slot", null)))),
      this.type === AccordionType.content && (h("div", { class: 'accordion-content' + (this.isopen ? ' open' : ''), style: {
          transform: `scaleY(${this.isopen ? '1' : '0'})`,
          opacity: `${this.isopen ? '1' : '0'}`,
          maxHeight: `${this.isopen ? '100%' : '0px'}`
        } },
        h("arvest-typography", { variant: TypographyVariants.body1 },
          h("slot", null)))),
      this.type === AccordionType.nav && (h("div", { class: 'accordion-nav' + (this.isopen ? ' open' : ''), style: {
          transform: `scaleY(${this.isopen ? '1' : '0'})`,
          opacity: `${this.isopen ? '1' : '0'}`,
          paddingBottom: `${this.isopen ? '16px' : '0'}`,
          maxHeight: `${this.isopen ? '100%' : '0px'}`
        } },
        h("slot", null))),
      this.type === AccordionType.mobileNav && (h("div", { class: 'accordion-nav' + (this.isopen ? ' open' : ''), style: {
          transform: `scaleY(${this.isopen ? '1' : '0'})`,
          opacity: `${this.isopen ? '1' : '0'}`,
          paddingBottom: `${this.isopen ? '16px' : '0'}`,
          maxHeight: `${this.isopen ? '100%' : '0px'}`
        } },
        h("slot", null)))));
  }
  static get is() { return "arvest-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-accordion.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-accordion.css"]
  }; }
  static get properties() { return {
    "accordiontitle": {
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
        "text": "Accordion title"
      },
      "attribute": "accordiontitle",
      "reflect": false
    },
    "type": {
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
        "text": "Accordion type.\nOptions are 'content', 'table-simple', 'nav', and 'mobileNav'"
      },
      "attribute": "type",
      "reflect": false
    },
    "rowtitles": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
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
        "text": "Array of row titles"
      }
    },
    "cols": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<Array<any>>",
        "resolved": "any[][]",
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
        "text": "2D Array of columns and cells"
      }
    },
    "activeCol": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-col",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "isopen": {},
    "viewport": {},
    "ismobile": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleKeyDown",
      "target": "window",
      "capture": true,
      "passive": true
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
