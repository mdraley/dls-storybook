'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f9672209.js');

const arvestButtongroupCss = ":host{display:block}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-primary{background-color:var(--primary01);border-radius:0.25rem}.btn-group-secondary{background-color:var(--secondary01);border-radius:0.25rem}.btn-group-success{background-color:var(--accent03);border-radius:0.25rem}.btn-group-info{background-color:var(--info);border-radius:0.25rem}.btn-group-warning{background-color:var(--warning);border-radius:0.25rem}.btn-group-danger{background-color:var(--danger);border-radius:0.25rem}.btn-group-light{background-color:var(--light);border-radius:0.25rem}.btn-group-dark{background-color:var(--dark);border-radius:0.25rem}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:0.5625rem;padding-left:0.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:0.375rem;padding-left:0.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:0.75rem;padding-left:0.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=\"radio\"],.btn-group-toggle>.btn input[type=\"checkbox\"],.btn-group-toggle>.btn-group>.btn input[type=\"radio\"],.btn-group-toggle>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}";

const ArvestButtongroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: `btn-group btn-group-${this.color}`, role: "group", "aria-label": `${this.ariaLabel}` }, index.h("slot", null))));
  }
};
ArvestButtongroup.style = arvestButtongroupCss;

exports.arvest_buttongroup = ArvestButtongroup;
