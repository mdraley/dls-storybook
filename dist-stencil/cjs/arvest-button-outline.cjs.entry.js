'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');
const enums = require('./enums-31276477.js');

const arvestButtonOutlineCss = ":host{display:inline-block;width:max-content}.button-outline{font-family:\"proxima-nova\", \"Helvetica Neue\", \"Arial\";padding:3px 1.5rem;background-color:transparent;border:solid 1px var(--white)}";

const ArvestButtonOutline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = 'Button';
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { class: "button-outline", "aria-label": this.label }, index.h("arvest-typography", { color: enums.Color.white, variant: enums.TypographyVariants.body1 }, index.h("slot", null)))));
  }
};
ArvestButtonOutline.style = arvestButtonOutlineCss;

exports.arvest_button_outline = ArvestButtonOutline;
