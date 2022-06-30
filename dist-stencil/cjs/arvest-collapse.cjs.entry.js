'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');

const arvestCollapseCss = ":host{display:block}.details-container{background-color:#eee;border:1px solid #aaa;border-radius:8px;margin:20px auto 10px;overflow:hidden;padding:0}.details-container:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.details-container:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.details-container>:last-child{border-bottom:0}::slotted(details){cursor:default;padding:1em 2em .5em;border-bottom:1px solid #aaa}details[open]{padding:1em 2em}::slotted(summary){cursor:pointer;font-weight:bold;list-style:none;margin:-.5em 0 0;padding:.5em 0}::slotted(details[open] summary){border-bottom:1px solid #aaa;margin-bottom:1em;margin-left:0;margin-right:0}::slotted(summary)::-webkit-details-marker{display:none}::slotted(summary):hover{cursor:pointer;text-decoration:underline}";

const ArvestCollapse = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "details-container" }, index.h("slot", null))));
  }
};
ArvestCollapse.style = arvestCollapseCss;

exports.arvest_collapse = ArvestCollapse;
