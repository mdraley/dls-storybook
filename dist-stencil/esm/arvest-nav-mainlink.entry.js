import { r as registerInstance, h, H as Host } from './index-66c1549d.js';
import { C as Color, T as TypographyVariants } from './enums-439ef31d.js';

const arvestNavMainlinkCss = ":host{display:block}.custom-text-decoration{background-color:var(--accent01);height:var(--spacing00);border-radius:6px 0;margin-top:6px}@media (max-width: 992px){.custom-text-decoration{background-color:transparent}}";

const ArvestNavMainlink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** If true, change to active styles */
    this.isactive = false;
    /** If true, change font colors for light mode */
    this.islightmode = false;
    this.mobile = false;
    this.isunderline = false;
    this.setHover = () => {
      this.color = this.islightmode ? Color.black : Color.white;
    };
    this.setDefault = () => {
      this.color = this.islightmode ? Color.black : Color.white;
    };
  }
  componentWillLoad() {
    this.color = this.islightmode ? Color.black : Color.white;
    this.activeColor = this.islightmode ? Color.black : Color.white;
  }
  render() {
    return (h(Host, null, h("arvest-typography", { variant: this.mobile ? TypographyVariants.mobileNavigation : TypographyVariants.navigation, color: this.isactive ? this.activeColor : this.color, onMouseEnter: this.setHover, onMouseLeave: this.setDefault }, h("slot", null)), this.isactive && h("div", { class: "custom-text-decoration" })));
  }
};
ArvestNavMainlink.style = arvestNavMainlinkCss;

export { ArvestNavMainlink as arvest_nav_mainlink };
