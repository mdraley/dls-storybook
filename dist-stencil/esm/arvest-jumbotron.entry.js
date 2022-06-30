import { r as registerInstance, h, H as Host } from './index-66c1549d.js';
import { C as Color } from './enums-439ef31d.js';

const arvestJumbotronCss = ":host{display:block}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:0.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0, 0, 0, 0.1)}";

const ArvestJumbotron = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Headline */
    this.headline = 'Hello, world!';
    /** Subhead */
    this.subhead = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
    /** Body */
    this.body = 'It uses utility classes for typography and spacing to space content out within the larger container.';
    /** Button Label */
    this.label = 'Button Description';
    /** Button Color */
    this.buttoncolor = Color.primary01;
  }
  render() {
    return (h(Host, null, h("div", { class: "jumbotron" }, h("h1", { class: "display-4" }, this.headline), h("p", { class: "lead" }, this.subhead), h("hr", { class: "my-4" }), h("p", null, this.body), h("arvest-button-primary", { color: this.buttoncolor, label: this.label, role: "button" }))));
  }
};
ArvestJumbotron.style = arvestJumbotronCss;

export { ArvestJumbotron as arvest_jumbotron };
