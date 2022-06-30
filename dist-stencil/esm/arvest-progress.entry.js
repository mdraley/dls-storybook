import { r as registerInstance, h, H as Host } from './index-66c1549d.js';

const arvestProgressCss = ":host{display:block}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.75rem;background-color:#e9ecef;border-radius:0.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion: reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}";

const ArvestProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.percentage = '';
    this.height = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "progress", style: { height: `${this.height ? `${this.height}px` : '1rem'}` } }, h("div", { class: `progress-bar ${this.isanimated ? 'progress-bar-striped progress-bar-animated' : ''}`, style: { width: `${this.percentage}%` }, role: "progressbar", "aria-valuenow": "0", "aria-valuemin": "0", "aria-valuemax": "100" }, this.haslabel ? `${this.percentage}%` : ''))));
  }
};
ArvestProgress.style = arvestProgressCss;

export { ArvestProgress as arvest_progress };
