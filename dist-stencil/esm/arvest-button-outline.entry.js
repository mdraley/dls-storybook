import { r as registerInstance, h, H as Host } from './index-66c1549d.js';
import { C as Color, T as TypographyVariants } from './enums-439ef31d.js';

const arvestButtonOutlineCss = ":host{display:inline-block;width:max-content}.button-outline{font-family:\"proxima-nova\", \"Helvetica Neue\", \"Arial\";padding:3px 1.5rem;background-color:transparent;border:solid 1px var(--white)}";

const ArvestButtonOutline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = 'Button';
  }
  render() {
    return (h(Host, null, h("button", { class: "button-outline", "aria-label": this.label }, h("arvest-typography", { color: Color.white, variant: TypographyVariants.body1 }, h("slot", null)))));
  }
};
ArvestButtonOutline.style = arvestButtonOutlineCss;

export { ArvestButtonOutline as arvest_button_outline };
