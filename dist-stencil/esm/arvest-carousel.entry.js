import { r as registerInstance, h, H as Host, g as getElement } from './index-66c1549d.js';
import { h as SlideDirection } from './enums-439ef31d.js';

const arvestCarouselCss = ":host{display:flex;width:100%;justify-content:center}.carousel-image{width:100%;height:100%;object-fit:cover}.carousel{width:100%;background-color:gray;position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;height:800px;overflow:hidden;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{-webkit-transform:translateX(100%);transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s 0.6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:0.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:0.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:50% / 100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}";

const ArvestCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "carousel slide " }, h("ol", { class: "carousel-indicators" }, this.children.map((child, index) => h("li", { "data-target": child, "data-slide-to": index, onClick: () => this.handleGoToIndex(index), class: `${index === this.activeIndex && 'active'}` }))), h("div", { class: "carousel-inner" }, this.children.map((child, index) => h("div", { class: `carousel-item ${index === this.activeIndex && 'active'}`, innerHTML: child.outerHTML })), h("a", { onClick: this.handlePrev, class: "carousel-control-prev", href: "#", role: "button", "data-slide": "prev" }, h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" })), h("a", { onClick: this.handleNext, class: "carousel-control-next", href: "#", role: "button", "data-slide": "next" }, h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }))))));
  }
  get host() { return getElement(this); }
};
ArvestCarousel.style = arvestCarouselCss;

export { ArvestCarousel as arvest_carousel };
