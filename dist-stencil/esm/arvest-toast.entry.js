import { r as registerInstance, h, H as Host } from './index-66c1549d.js';

const arvestToastCss = ":host{display:block}.secret-message{position:absolute;background:black;display:inline-block;color:white;border-radius:11px;padding:7px;z-index:2}.toast{-ms-flex-preferred-size:350px;flex-basis:350px;max-width:350px;font-size:0.875rem;background-color:rgba(255, 255, 255, 0.85);background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.1);box-shadow:0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);opacity:0;border-radius:0.25rem}.toast:not(:last-child){margin-bottom:0.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0.25rem 0.75rem;color:#6c757d;background-color:rgba(255, 255, 255, 0.85);background-clip:padding-box;border-bottom:1px solid rgba(0, 0, 0, 0.05);border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.toast-body{padding:0.75rem}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:0.75}button.close{padding:0;background-color:transparent;border:0}button.close :hover{cursor:pointer}.dissapear{display:none}.ml-2,.mx-2{margin-left:0.5rem !important}.mb-1,.my-1{margin-bottom:0.25rem !important}.text-muted{color:#6c757d !important}.rounded{border-radius:0.25rem !important}.mr-2,.mx-2{margin-right:0.5rem !important}.mr-auto,.mx-auto{margin-right:auto !important}.fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}";

const ArvestToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.show = true;
    this.handleClose = () => this.show = false;
  }
  render() {
    return (h(Host, null, h("div", { class: `toast fade ${this.show ? 'show' : ''}`, role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "toast-header" }, this.imgsrc && h("img", { src: this.imgsrc, class: "rounded mr-2", alt: this.imgalt }), h("strong", { class: "mr-auto" }, "Bootstrap"), h("small", { class: "text-muted" }, "11 mins ago"), h("button", { onClick: this.handleClose, type: "button", class: "ml-2 mb-1 close", "data-dismiss": "toast", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "toast-body" }, h("slot", null)))));
  }
};
ArvestToast.style = arvestToastCss;

export { ArvestToast as arvest_toast };
