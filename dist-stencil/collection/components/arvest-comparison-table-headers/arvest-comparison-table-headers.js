import { Component, Host, h, Prop, State, Listen, Event } from '@stencil/core';
import { Color, ViewportBreakpoints } from '../../global/ts/enums';
import PhoneCreditcard from './phone-creditcard.svg';
export class ArvestComparisonTableHeaders {
  constructor() {
    this.viewport = window.innerWidth;
    this.slidePosition = 0;
    this.touchStartPos = 0;
    this.touchEndPos = 0;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
    this.touchStartHandler = (event) => {
      this.touchStartPos = event.touches[0].screenX;
    };
    this.touchMoveHandler = (event) => {
      this.touchEndPos = event.touches[0].screenX;
    };
    this.moveSlideToRight = () => {
      if (this.slidePosition < this.headers.length - 1) {
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
      this.sliderMoved.emit(this.slidePosition);
    };
    this.renderCards = () => this.headers.map((header, index) => h("arvest-comparison-table-headercard", { style: this.ismobile &&
        index !== this.slidePosition && { opacity: '0.3',
        transition: '0.3s' }, cardTitle: header.cardTitle, description: header.description, cta: header.cta, hascolor: index % 2 < 1 }));
    this.renderSliderDots = () => this.headers.map((header, index) => h("div", { id: `${header}-${index}`, class: index < this.headers.length - 1 && 'dots-item' },
      h("arvest-primary-carousel-mobilebtns", { isactive: this.slidePosition === index, color: Color.grayscale04 })));
    this.calcTranslation = (num) => 60 * -num;
  }
  calcViewport() {
    this.viewport = window.innerWidth;
  }
  renderSingleColum(index) {
    this.slidePosition = index.detail;
  }
  componentWillRender() {
    this.viewport = window.innerWidth;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
  }
  render() {
    return (h(Host, null,
      h("div", { onDragStart: (e) => e.preventDefault(), onTouchStart: this.touchStartHandler, onTouchMove: this.touchMoveHandler, onTouchEnd: this.touchEndHandler, class: "cards-row", style: this.ismobile
          ? {
            transform: `translateX(calc(${this.calcTranslation(this.slidePosition)}vw - ${this.slidePosition * 16}px))`,
            transition: '0.3s ease-in-out'
          }
          : {
            transform: 'translateX(0%)',
            transition: '0.3s ease-in-out'
          } },
        h("div", { class: "icon card-container" },
          h("img", { alt: "", src: PhoneCreditcard })),
        this.renderCards()),
      h("div", { class: "dots-container" }, this.ismobile && this.renderSliderDots())));
  }
  static get is() { return "arvest-comparison-table-headers"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-comparison-table-headers.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-comparison-table-headers.css"]
  }; }
  static get properties() { return {
    "headers": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "viewport": {},
    "slidePosition": {},
    "touchStartPos": {},
    "touchEndPos": {},
    "ismobile": {}
  }; }
  static get events() { return [{
      "method": "sliderMoved",
      "name": "slidermoved",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "calcViewport",
      "target": "window",
      "capture": true,
      "passive": true
    }, {
      "name": "slidermoved",
      "method": "renderSingleColum",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
