import { Component, Host, h, Prop, State, Listen, Event, Watch } from '@stencil/core';
import { LogoColor, Color, TypographyVariants, ViewportBreakpoints } from '../../global/ts/enums';
import * as navData from './navigation-list.json';
export class ArvestNav {
  constructor() {
    this.activeindex = 0;
    /** Navigation data array  **/
    this.navData = navData;
    this.showSubNav = false;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
    this.toggleShowSubNav = () => {
      this.showSubNav = !this.showSubNav;
      if (this.isMobile) {
        this.showMobileNavMain.emit(this.showSubNav);
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
            h("arvest-logo", { variant: LogoColor.white })),
          h("nav", { "aria-label": "Top Navigation" },
            h("ul", { role: "menubar" },
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "percentageRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Rates"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "checkCircleRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Survey"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "bookmarkRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "About"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "suitcaseRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Careers"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "commentAltRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Contact"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "mapMarkerRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "ATMs/Branches"))),
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-button-secondary-reverse", { label: "Button", issmall: true }))))),
          this.isMobile && (h("nav", { class: "mobile", "aria-label": "Top Navigation" },
            h("ul", { role: "menubar" },
              h("li", { class: "top-row-menu-item", role: "menuitem" },
                h("a", { href: "#" },
                  h("arvest-icon", { icon: "checkCircleRegular" }),
                  h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Nav Item")))),
            h("button", { "aria-label": "Toggle Mobile Sub Navigation", onClick: this.toggleShowSubNav, class: "hamburger" },
              h("arvest-icon", { icon: "menu", class: this.showSubNav ? 'hidden' : '' }),
              h("arvest-icon", { icon: "timesLight", class: this.showSubNav ? '' : 'hidden' }))))),
        h("div", { class: 'bottom-row' + (this.isMobile ? ' mobile' : '') },
          ((this.isMobile && this.showSubNav) || !this.isMobile) && (h("div", { class: "search" },
            h("arvest-searchbar", { isMobile: this.isMobile, links: this.searchbarlinks }))),
          h("nav", { "aria-label": "Main Navigation" },
            h("arvest-nav-main-menu", { activeIndex: this.activeindex, isLightMode: false, navData: this.navData, navType: 'main' })))),
      this.isMobile && this.showSubNav && (h("div", { class: "overlay", onClick: this.toggleShowSubNav }))));
  }
  static get is() { return "arvest-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-nav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-nav.css"]
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
        "text": ""
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
        "text": ""
      },
      "attribute": "searchbarlinks",
      "reflect": false
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
      "method": "showMobileNavMain",
      "name": "showMobileNavMain",
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
