import { Component, Element, Host, State, h } from '@stencil/core';
import { SlideDirection } from '../../global/ts/enums';
export class ArvestCarousel {
  constructor() {
    this.activeIndex = 0;
    this.handleNext = () => {
      this.activeIndex < this.children.length - 1
        ? this.activeIndex += 1
        : this.activeIndex = 0;
      this.slideDirection = SlideDirection.right;
    };
    this.handlePrev = () => {
      this.activeIndex > 0
        ? this.activeIndex -= 1
        : this.activeIndex = this.children.length - 1;
      this.slideDirection = SlideDirection.left;
    };
    this.handleGoToIndex = (index) => {
      this.activeIndex = index;
    };
  }
  componentWillLoad() {
    this.children = Array.from(this.host.children);
    this.host.innerHTML = '';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "carousel slide " },
        h("ol", { class: "carousel-indicators" }, this.children.map((child, index) => h("li", { "data-target": child, "data-slide-to": index, onClick: () => this.handleGoToIndex(index), class: `${index === this.activeIndex && 'active'}` }))),
        h("div", { class: "carousel-inner" },
          this.children.map((child, index) => h("div", { class: `carousel-item ${index === this.activeIndex && 'active'}`, innerHTML: child.outerHTML })),
          h("a", { onClick: this.handlePrev, class: "carousel-control-prev", href: "#", role: "button", "data-slide": "prev" },
            h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" })),
          h("a", { onClick: this.handleNext, class: "carousel-control-next", href: "#", role: "button", "data-slide": "next" },
            h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }))))));
  }
  static get is() { return "arvest-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-carousel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-carousel.css"]
  }; }
  static get states() { return {
    "slideDirection": {},
    "activeIndex": {}
  }; }
  static get elementRef() { return "host"; }
}
