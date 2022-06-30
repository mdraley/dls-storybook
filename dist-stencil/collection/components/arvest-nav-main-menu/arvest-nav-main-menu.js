import { Component, Host, h, State, Prop, Element, Watch, Listen } from '@stencil/core';
import { BadgeColor, Color, TypographyVariants, SubNavTypes, ViewportBreakpoints } from '../../global/ts/enums';
export class ArvestNavMainMenu {
  constructor() {
    /** Active tab with underline style */
    this.activeIndex = 0;
    /** If true, change font colors for light mode */
    this.isLightMode = false;
    this.showMobileSubNav = false;
    this.isUnderline = false;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
    this.onHover = () => {
      this.color = this.isLightMode ? Color.black : Color.white;
    };
    this.onLeave = () => {
      this.color = this.isLightMode ? Color.black : Color.white;
    };
    this.displayDesktopSubMenu = (subNav) => {
      return subNav.map((item) => {
        return (h("li", { class: 'section' + ((item.section.length > 6) ? ' double' : '') + ((item.section[0].type === SubNavTypes.ad) ? ' double ad-section' : '') },
          h("ul", null, item.section.map((section) => {
            if (section.type.valueOf() === SubNavTypes.ad) {
              return (h("li", { class: 'ad double' },
                h("arvest-ad-four-col", { color: section.adBgColor ? section.adBgColor : '', size: 'large', showcta: !!section.adCtaTitle, ctatitle: section.adCtaTitle ? section.adCtaTitle : '', url: section.adCtaUrl ? section.adCtaUrl : '' }, section.adMessage)));
            }
            else if (section.type.valueOf() === SubNavTypes.heading) {
              return (h("li", { class: item.section.length > 6 ? 'double' : '' },
                h("arvest-typography", { variant: TypographyVariants.navigation, class: "subheading" }, section.name)));
            }
            else if (section.type.valueOf() === SubNavTypes.link) {
              return (h("li", null,
                h("a", { href: section.href, role: "menuitem" },
                  h("arvest-typography", { variant: TypographyVariants.navigation, class: 'navigation' + section.isNew ? ' new' : '' }, section.name)),
                section.isNew && (h("arvest-badge", { color: BadgeColor.label }, "New"))));
            }
            else if (section.type.valueOf() === SubNavTypes.button) {
              return (h("li", null,
                h("a", { href: section.href, role: "menuitem" },
                  h("arvest-button-secondary", { label: section.name, issmall: true }))));
            }
            console.log('Unrecognized sub navigation type.', section);
            return null;
          }))));
      });
    };
    this.displayMobileSubMenuItem = (subNav) => {
      return subNav.section.map((section) => {
        if (section.type.valueOf() === SubNavTypes.heading) {
          return (h("arvest-typography", { variant: TypographyVariants.subheading, class: "subheading" }, section.name));
        }
        else if (section.type.valueOf() === SubNavTypes.link) {
          return (h("a", { href: section.href, role: "menuitem" },
            h("arvest-typography", { variant: TypographyVariants.navigation, class: 'navigation' + (section.isNew ? ' new' : '') }, section.name),
            section.isNew && (h("arvest-badge", { color: BadgeColor.label }, "New"))));
        }
        else if (section.type.valueOf() === SubNavTypes.button) {
          return (h("a", { href: section.href, role: "menuitem" },
            h("arvest-button-primary", { label: section.name })));
        }
        console.log('Unrecognized sub navigation type.', section);
        return null;
      });
    };
  }
  setActiveIndex(newValue) {
    this.activeIndex = Number(newValue);
  }
  setIsLightMode(newValue) {
    this.isLightMode = (newValue === 'true');
  }
  handleResize(e) {
    const window = e.target;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
  }
  handleshowMobileNavMain(e) {
    if (this.navType === 'main') {
      this.showMobileSubNav = e.detail;
    }
  }
  handleshowMobileNav(e) {
    if (this.navType === 'micro') {
      this.showMobileSubNav = e.detail;
    }
  }
  componentWillLoad() {
    if (this.navType === 'main') {
      this.isLightMode = true;
    }
    this.color = this.isLightMode ? Color.black : Color.white;
    this.activeColor = this.isLightMode ? Color.black : Color.white;
    this.parseNavDataArray(this.navData);
  }
  parseNavDataArray(data) {
    if (typeof data === 'string') {
      this._navData = JSON.parse(data);
    }
    this._navData = data;
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'wrapper' + (this.showMobileSubNav ? ' open' : '') },
        h("ul", { class: this.navType, role: "menubar" }, this._navData.navigation.map((item, index) => {
          if (((!this.isMobile) || (this.isMobile && this.showMobileSubNav && item.subNav.length === 0))) {
            return (h("li", { class: 'main-menu', role: "menuitem" },
              h("arvest-typography", { variant: this.isMobile ? TypographyVariants.mobileNavigation : TypographyVariants.navigation, color: this.activeIndex === index ? this.activeColor : this.color },
                h("a", { id: 'main-link' + index, href: item.href, tabIndex: 0, onMouseEnter: this.onHover, onMouseLeave: this.onLeave }, item.name)),
              (this.activeIndex === index) && !this.isMobile && h("div", { class: "custom-text-decoration" }),
              !this.isMobile && (item.subNav.length > 0) && (h("ul", { class: "sub-nav" }, this.displayDesktopSubMenu(item.subNav)))));
          }
          if (this.isMobile && this.showMobileSubNav && (item.subNav.length > 0)) {
            return (h("li", null,
              h("arvest-accordion", { type: "mobileNav", accordiontitle: item.name },
                item.subNav.map((sub) => {
                  return this.displayMobileSubMenuItem(sub);
                }),
                h("div", { class: "mobile-subnav-spacer" }))));
          }
          return null;
        })))));
  }
  static get is() { return "arvest-nav-main-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-nav-main-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-nav-main-menu.css"]
  }; }
  static get properties() { return {
    "activeIndex": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Active tab with underline style"
      },
      "attribute": "active-index",
      "reflect": false,
      "defaultValue": "0"
    },
    "isLightMode": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, change font colors for light mode"
      },
      "attribute": "is-light-mode",
      "reflect": false,
      "defaultValue": "false"
    },
    "navType": {
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
      "attribute": "nav-type",
      "reflect": false
    },
    "navData": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | INav",
        "resolved": "INav | string",
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
      "attribute": "nav-data",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_navData": {},
    "showMobileSubNav": {},
    "isUnderline": {},
    "color": {},
    "activeColor": {},
    "isMobile": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "activeIndex",
      "methodName": "setActiveIndex"
    }, {
      "propName": "isLightMode",
      "methodName": "setIsLightMode"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": true,
      "passive": true
    }, {
      "name": "showMobileNavMain",
      "method": "handleshowMobileNavMain",
      "target": "window",
      "capture": true,
      "passive": false
    }, {
      "name": "showMobileNavMicrosite",
      "method": "handleshowMobileNav",
      "target": "window",
      "capture": true,
      "passive": false
    }]; }
}
