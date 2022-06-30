'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');

const arvestMaxContainerCss = ":host{display:flex;justify-content:center}.max-container{box-sizing:border-box;max-width:1140px}";

const ArvestMaxContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "max-container" }, index.h("slot", null))));
  }
};
ArvestMaxContainer.style = arvestMaxContainerCss;

exports.arvest_max_container = ArvestMaxContainer;
