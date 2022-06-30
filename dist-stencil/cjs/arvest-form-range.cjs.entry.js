'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');

const arvestFormRangeCss = ":host{display:block;width:100%}label{display:inline-block;margin-bottom:0.5rem}input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;overflow:visible}input[type=\"radio\"],input[type=\"checkbox\"]{box-sizing:border-box;padding:0}input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.form-control-range{display:block;width:100%}";

const ArvestFormRange = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", null, index.h("label", null, this.label), index.h("input", { type: "range", class: "form-control-range", id: "formControlRange" })), index.h("slot", null)));
  }
};
ArvestFormRange.style = arvestFormRangeCss;

exports.arvest_form_range = ArvestFormRange;
