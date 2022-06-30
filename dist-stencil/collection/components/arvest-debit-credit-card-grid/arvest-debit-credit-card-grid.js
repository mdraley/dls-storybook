import { Component, Host, h, Prop, State, Watch, Listen } from '@stencil/core';
import { Color, TypographyVariants, ViewportBreakpoints, CardSelector } from '../../global/ts/enums';
import { cardData } from './card-list';
export class ArvestDebitCreditCardGrid {
  constructor() {
    /** Data Array to render Cards with. */
    this.cardData = cardData;
    /** Sets Parsed Data Array to State */
    this._cardData = [];
    /** Used to toggle between grid views */
    this.showSmallGrid = true;
    this.viewport = window.innerWidth;
    this.isMobile = this.viewport < ViewportBreakpoints.mobile;
    /** Used to select which sorted array to display */
    this.selectSort = CardSelector.localFavorites;
    this.showDropdown = false;
    this.handleToggle = () => {
      this.showSmallGrid = !this.showSmallGrid;
    };
    this.toggleDropdown = () => {
      this.showDropdown = !this.showDropdown;
    };
    this.getSort = () => {
      if (this.selectSort === CardSelector.localFavorites) {
        return this._cardData.sort((a, b) => (a.rating > b.rating ? -1 : 1));
      }
      else if (this.selectSort === CardSelector.aToZ) {
        return this._cardData.sort((a, b) => (a.label > b.label ? 1 : -1));
      }
      return this._cardData.sort((a, b) => (a.label > b.label ? -1 : 1));
    };
    this.render2UpView = () => (h("div", { class: "two-up-grid" }, this.getSort().map((card) => (h("div", { class: "two-up-card" },
      h("arvest-debit-credit-card-selector", { linkcta: card.subject, label: card.label, bgimage: card.bgimage, showButton: true, showLabel: true, showLink: true }))))));
    this.render4UpView = () => (h("div", { class: "four-up-grid" }, this.getSort().map((card) => (h("div", { class: "four-up-card" },
      h("arvest-debit-credit-card-selector", { linkcta: card.subject, label: card.label, bgimage: card.bgimage, showButton: true, showLabel: true, showLink: true }))))));
  }
  calcViewport() {
    this.viewport = window.innerWidth;
    this.isMobile = this.viewport < ViewportBreakpoints.mobile;
  }
  handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.handleToggle();
    }
  }
  arrayDataWatcher(cardData) {
    if (typeof cardData === 'string') {
      this._cardData = JSON.parse(cardData);
    }
    else {
      this._cardData = cardData;
    }
  }
  handleSelectSort(selection) {
    this.selectSort = selection;
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.cardData);
  }
  componentWillRender() {
    this.viewport = window.innerWidth;
    this.isMobile = this.viewport < ViewportBreakpoints.mobile;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "selectors" },
          h("div", { class: "sort" },
            h("arvest-typography", { variant: TypographyVariants.body1 },
              "Sort by:",
              h("a", { onClick: this.toggleDropdown, tabIndex: 0 },
                h("arvest-typography", { variant: TypographyVariants.action, color: Color.secondary01 },
                  "\u00A0",
                  this.selectSort),
                h("arvest-icon", { icon: "chevronDownLight" })))),
          !this.showSmallGrid && this.isMobile && (h("div", { class: "views" },
            h("a", { class: "two-up-active" },
              h("arvest-icon", { class: "icon", icon: "twoColumn" })),
            h("a", { onClick: this.handleToggle, tabIndex: 0 },
              h("arvest-icon", { class: "icon-active", icon: "fourColumn" })))),
          !this.showSmallGrid && !this.isMobile && (h("div", { class: "views" },
            h("arvest-typography", { class: "two-up-inactive", variant: TypographyVariants.body2, color: Color.grayscale06 }, "2-Up-View"),
            h("a", { onClick: this.handleToggle, tabIndex: 0 },
              h("arvest-typography", { variant: TypographyVariants.body2, color: Color.secondary01 }, "4-Up-View")))),
          this.showSmallGrid && this.isMobile && (h("div", { class: "views" },
            h("a", { class: "two-up-active", onClick: this.handleToggle, tabIndex: 0 },
              h("arvest-icon", { class: "icon-active", icon: "twoColumn" })),
            h("a", null,
              h("arvest-icon", { class: "icon", icon: "fourColumn" })))),
          this.showSmallGrid && !this.isMobile && (h("div", { class: "views" },
            h("a", { class: "two-up-active", onClick: this.handleToggle, tabIndex: 0 },
              h("arvest-typography", { variant: TypographyVariants.body2, color: Color.secondary01 }, "2-Up-View\u00A0")),
            h("a", null,
              h("arvest-typography", { variant: TypographyVariants.body2, color: Color.grayscale06 }, "4-Up-View"))))),
        this.showDropdown ? (h("div", { class: "dropdown" },
          h("a", { class: "select", onClick: () => this.handleSelectSort(CardSelector.localFavorites) },
            h("arvest-typography", { variant: TypographyVariants.action, color: Color.secondary01 }, "Local Favorites")),
          h("a", { class: "select", onClick: () => this.handleSelectSort(CardSelector.aToZ) },
            h("arvest-typography", { variant: TypographyVariants.action, color: Color.secondary01 }, "A-Z")),
          h("a", { class: "select", onClick: () => this.handleSelectSort(CardSelector.zToA) },
            h("arvest-typography", { variant: TypographyVariants.action, color: Color.secondary01 }, "Z-A")))) : '',
        this.showSmallGrid ? this.render4UpView() : this.render2UpView())));
  }
  static get is() { return "arvest-debit-credit-card-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-debit-credit-card-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-debit-credit-card-grid.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "cardData": {
      "type": "unknown",
      "mutable": true,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Data Array to render Cards with."
      },
      "defaultValue": "cardData"
    }
  }; }
  static get states() { return {
    "_cardData": {},
    "showSmallGrid": {},
    "viewport": {},
    "isMobile": {},
    "selectSort": {},
    "showDropdown": {}
  }; }
  static get watchers() { return [{
      "propName": "cardData",
      "methodName": "arrayDataWatcher"
    }, {
      "propName": "selectSort",
      "methodName": "handleSelectSort"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "calcViewport",
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
