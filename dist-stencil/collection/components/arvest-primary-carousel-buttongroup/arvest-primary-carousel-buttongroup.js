import { Component, Host, Prop, h, State, Event } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestPrimaryCarouselButtongroup {
  constructor() {
    this.ismobile = false;
    this.selectedBtn = -1;
    this.colorDefault = Color.grayscale06;
    this.colorHover = Color.hover01;
    this.setSelectedBtn = (index) => {
      this.selectedBtn = index;
    };
    this.defaultSelectedBtn = () => {
      this.selectedBtn = -1;
    };
  }
  arrayDataWatcher(slides) {
    if (typeof slides === 'string') {
      this._slides = JSON.parse(slides);
    }
    else {
      this._slides = slides;
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.slides);
  }
  render() {
    return (h(Host, null,
      h("div", { class: "btngroup-container" }, this._slides.map((slide, index) => (this.ismobile ? (h("div", { class: index < this._slides.length - 1 && 'btngroup-container--mobile-item' },
        h("arvest-primary-carousel-mobilebtns", { isactive: this.slidePosition === index }))) : (h("button", { onMouseEnter: () => this.setSelectedBtn(index), onMouseLeave: this.defaultSelectedBtn, onClick: () => this.btnClicked.emit(index), class: `btngroup-btn ${index < this._slides.length - 1 &&
          'btngroup-btn--rightdivider'}` },
        h("div", { class: "btngroup-btn--wrapper" },
          h("arvest-typography", { variant: TypographyVariants.action, color: this.selectedBtn === index || this.slidePosition === index
              ? this.colorHover
              : this.colorDefault }, slide),
          this.slidePosition === index && h("div", { class: "btngroup-btn--underline" })))))))));
  }
  static get is() { return "arvest-primary-carousel-buttongroup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-primary-carousel-buttongroup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-primary-carousel-buttongroup.css"]
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
    },
    "slidePosition": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "slide-position",
      "reflect": false
    },
    "ismobile": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ismobile",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "_slides": {},
    "selectedBtn": {}
  }; }
  static get events() { return [{
      "method": "btnClicked",
      "name": "primaryCarouselBtnClicked",
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
}
