import { Component, Host, h, Prop, Listen, State } from '@stencil/core';
import { TypographyVariants, Color, ViewportBreakpoints } from '../../global/ts/enums';
export class ArvestPrimaryHeroCarousel {
  constructor() {
    this._slides = ['https://www.arvest.com/images/dls/2000x900/1.jpg', 'https://www.arvest.com/images/dls/2000x900/2.jpg', 'https://www.arvest.com/images/dls/2000x900/3.jpg', 'https://www.arvest.com/images/dls/2000x900/4.jpg',];
    this.slidePosition = 0;
    this.touchStartPos = 0;
    this.touchEndPos = 0;
    this.headline = 'Lorem ipsum';
    // eslint-disable-next-line consistent-return
    this.calcTypeVariant = (headline) => {
      const charNums = headline.length;
      if (charNums <= 30) {
        return TypographyVariants.h1;
      }
      else if (charNums > 30 && charNums <= 60) {
        return TypographyVariants.h2;
      }
      else if (charNums > 60) {
        return TypographyVariants.h3;
      }
    };
    this.touchStartHandler = (event) => {
      this.touchStartPos = event.touches[0].screenX;
    };
    this.touchMoveHandler = (event) => {
      this.touchEndPos = event.touches[0].screenX;
    };
    this.moveSlideToRight = () => {
      if (this.slidePosition < this._slides.length - 1) {
        this.slidePosition += 1;
      }
    };
    this.moveSlideToLeft = () => {
      if (this.slidePosition > 0) {
        this.slidePosition -= 1;
      }
    };
    this.touchEndHandler = () => {
      const direction = this.touchEndPos - this.touchStartPos;
      if (direction < 0) {
        this.moveSlideToRight();
      }
      else {
        this.moveSlideToLeft();
      }
    };
  }
  calcViewport() {
    this.viewport = window.innerWidth;
  }
  btnClickedHandler(index) {
    this.slidePosition = index.detail;
  }
  arrayDataWatcher(slides) {
    if (typeof slides === 'string') {
      this._slides = JSON.parse(slides);
    }
    else {
      this._slides = slides;
    }
  }
  renderSlides() {
    return (h("div", { onDragStart: (e) => e.preventDefault(), onTouchStart: this.touchStartHandler, onTouchMove: this.touchMoveHandler, onTouchEnd: this.touchEndHandler, class: "responsive-image-container" }, this._slides.map((slide) => h("div", { style: {
        transform: `translateX(-${this.slidePosition}00%)`,
        transition: '0.3s ease-in-out'
      } },
      h("arvest-responsive-image", { src: slide.src, alt: this.headline })))));
  }
  componentWillRender() {
    this.viewport = window.innerWidth;
    this.arrayDataWatcher(this.slides);
    if (this.headline.length > 80) {
      this.headline = this.headline.slice(0, 80);
    }
    this.headline = this._slides[this.slidePosition].headline;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        this.renderSlides(),
        h("div", { class: "content-container" },
          h("div", { class: "content-container--grid" },
            h("div", { class: "content-container--headline" },
              h("arvest-typography", { variant: this.calcTypeVariant(this.headline), color: this.viewport <= ViewportBreakpoints.primaryHeroBreakpoint
                  ? Color.black
                  : Color.white }, this.headline)),
            h("div", { class: "content-container--button" },
              h("arvest-button-primary", { label: "Button" })))),
        h("nav", { class: "responsive-image-btngroup-container" },
          h("arvest-primary-carousel-buttongroup", { slides: '["Credit Card", "Cool Blue Savings", "Business Loans", "Zelle"]', ismobile: this.viewport <= ViewportBreakpoints.primaryHeroBreakpoint, slidePosition: this.slidePosition })))));
  }
  static get is() { return "arvest-primary-hero-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-primary-hero-carousel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-primary-hero-carousel.css"]
  }; }
  static get properties() { return {
    "slides": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "slides",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_slides": {},
    "viewport": {},
    "slidePosition": {},
    "touchStartPos": {},
    "touchEndPos": {},
    "headline": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "calcViewport",
      "target": "window",
      "capture": true,
      "passive": true
    }, {
      "name": "primaryCarouselBtnClicked",
      "method": "btnClickedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
