'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');
const enums = require('./enums-31276477.js');

const arvestNavMainlinkCss = ":host{display:block}.custom-text-decoration{background-color:var(--accent01);height:var(--spacing00);border-radius:6px 0;margin-top:6px}@media (max-width: 992px){.custom-text-decoration{background-color:transparent}}";

const ArvestNavMainlink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** If true, change to active styles */
    this.isactive = false;
    /** If true, change font colors for light mode */
    this.islightmode = false;
    this.mobile = false;
    this.isunderline = false;
    this.setHover = () => {
      this.color = this.islightmode ? enums.Color.black : enums.Color.white;
    };
    this.setDefault = () => {
      this.color = this.islightmode ? enums.Color.black : enums.Color.white;
    };
  }
  componentWillLoad() {
    this.color = this.islightmode ? enums.Color.black : enums.Color.white;
    this.activeColor = this.islightmode ? enums.Color.black : enums.Color.white;
  }
  render() {
    return (index.h(index.Host, null, index.h("arvest-typography", { variant: this.mobile ? enums.TypographyVariants.mobileNavigation : enums.TypographyVariants.navigation, color: this.isactive ? this.activeColor : this.color, onMouseEnter: this.setHover, onMouseLeave: this.setDefault }, index.h("slot", null)), this.isactive && index.h("div", { class: "custom-text-decoration" })));
  }
};
ArvestNavMainlink.style = arvestNavMainlinkCss;

exports.arvest_nav_mainlink = ArvestNavMainlink;
