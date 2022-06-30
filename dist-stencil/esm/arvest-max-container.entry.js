import { r as registerInstance, h, H as Host } from './index-66c1549d.js';

const arvestMaxContainerCss = ":host{display:flex;justify-content:center}.max-container{box-sizing:border-box;max-width:1140px}";

const ArvestMaxContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "max-container" }, h("slot", null))));
  }
};
ArvestMaxContainer.style = arvestMaxContainerCss;

export { ArvestMaxContainer as arvest_max_container };
