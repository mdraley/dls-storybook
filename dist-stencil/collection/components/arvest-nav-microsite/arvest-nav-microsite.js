import { Component, Event, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { Color, LogoColor, TypographyVariants, ViewportBreakpoints } from '../../global/ts/enums';
import * as navData from './navigation-list.json';
export class ArvestNavMicrosite {
  constructor() {
    /** Active tab that has the underline */
    this.activeindex = 0;
    /** Frequently asked questions for searchbar */
    this.searchbarlinks = `[
    {"label":"Find my routing number", "href":"https://arvest.com"},
    {"label":"Apply for a loan", "href":"https://arvest.com"},
    {"label":"Open an account", "href":"https://arvest.com"},
    {"label":"Order / reorder checks", "href":"https://arvest.com"}
  ]`;
    /** Navigation data array  **/
    this.navData = navData;
    this.showSubNav = false;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
    this.toggleShowSubNav = () => {
      this.showSubNav = !this.showSubNav;
      if (this.isMobile) {
        this.showMobileNavMicrosite.emit(this.showSubNav);
      }
    };
  }
  setNavData(newValue) {
    this.navData = JSON.parse(newValue);
  }
  handleResize(e) {
    const window = e.target;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "nav-container" },
        h("div", { class: "top-row" },
          h("div", { class: "logo" },
            h("arvest-logo", { variant: LogoColor.blue })),
          !this.isMobile && (h("nav", { "aria-label": "Top Navigation" },
            h("ul", { role: "menubar" },
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  " ",
                  h("arvest-icon", { icon: "bookmarkRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.black }, "About")))),
            h("ul", null,
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  " ",
                  h("arvest-icon", { icon: "phoneAltRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.black }, "Call toll free (866) 952-9523")))))),
          this.isMobile && (h("nav", { class: "mobile", "aria-label": "Top Navigation" },
            h("ul", { role: "menubar" },
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  " ",
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.black }, "Log in")))),
            h("button", { "aria-label": "Toggle Mobile Sub Navigation", onClick: this.toggleShowSubNav, class: "hamburger" },
              h("arvest-icon", { icon: "menu", class: this.showSubNav ? 'hidden' : '' }),
              h("arvest-icon", { icon: "timesLight", class: this.showSubNav ? 'close' : 'hidden' }))))),
        h("div", { class: 'bottom-row' + (this.isMobile ? ' mobile' : '') },
          this.isMobile && this.showSubNav && (h("div", { class: "search" },
            h("arvest-searchbar", { isMobile: true, links: this.searchbarlinks }))),
          h("nav", { "aria-label": "Main Navigation" },
            h("div", null,
              h("arvest-nav-main-menu", { activeIndex: this.activeindex, isLightMode: false, navData: this.navData, navType: 'micro' }))))),
      this.isMobile && this.showSubNav && (h("div", { class: "overlay", onClick: this.toggleShowSubNav }))));
  }
  static get is() { return "arvest-nav-microsite"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-nav-microsite.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-nav-microsite.css"]
  }; }
  static get properties() { return {
    "activeindex": {
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
        "text": "Active tab that has the underline"
      },
      "attribute": "activeindex",
      "reflect": false,
      "defaultValue": "0"
    },
    "searchbarlinks": {
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
        "text": "Frequently asked questions for searchbar"
      },
      "attribute": "searchbarlinks",
      "reflect": false,
      "defaultValue": "`[\n    {\"label\":\"Find my routing number\", \"href\":\"https://arvest.com\"},\n    {\"label\":\"Apply for a loan\", \"href\":\"https://arvest.com\"},\n    {\"label\":\"Open an account\", \"href\":\"https://arvest.com\"},\n    {\"label\":\"Order / reorder checks\", \"href\":\"https://arvest.com\"}\n  ]`"
    },
    "navData": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "INav",
        "resolved": "INav",
        "references": {
          "INav": {
            "location": "import",
            "path": "../../global/ts/interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Navigation data array  *"
      },
      "defaultValue": "navData"
    }
  }; }
  static get states() { return {
    "showSubNav": {},
    "isMobile": {}
  }; }
  static get events() { return [{
      "method": "showMobileNavMicrosite",
      "name": "showMobileNavMicrosite",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "navData",
      "methodName": "setNavData"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": true,
      "passive": true
    }]; }
}
