import { r as registerInstance, h, H as Host } from './index-66c1549d.js';

const arvestFormRangeCss = ":host{display:block;width:100%}label{display:inline-block;margin-bottom:0.5rem}input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;overflow:visible}input[type=\"radio\"],input[type=\"checkbox\"]{box-sizing:border-box;padding:0}input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.form-control-range{display:block;width:100%}";

const ArvestFormRange = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", null, h("label", null, this.label), h("input", { type: "range", class: "form-control-range", id: "formControlRange" })), h("slot", null)));
  }
};
ArvestFormRange.style = arvestFormRangeCss;

export { ArvestFormRange as arvest_form_range };
