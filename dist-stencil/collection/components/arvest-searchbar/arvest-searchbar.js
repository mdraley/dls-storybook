import { Component, Host, h, Prop, Element, Watch, Event, State } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';
export class ArvestSearchbar {
  constructor() {
    /* Enables special styles for the search on the Microsite Nav */
    this.isMobile = false;
    this.isTakeover = false;
    this.isReverse = false;
    this.isMouseOver = false;
    this.showLinks = false;
    this.isFocused = false;
    this.setMouseOn = () => {
      this.isMouseOver = true;
    };
    this.setMouseOff = () => {
      this.isMouseOver = false;
    };
    this.setTakeoverOn = () => {
      this.isTakeover = true;
      this.showLinks = true;
      this.isFocused = true;
      if (this.isMobile) {
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100vh';
      }
    };
    this.setTakeoverOff = () => {
      this.isTakeover = false;
      this.showLinks = false;
      this.isFocused = true;
      if (this.isMobile) {
        document.body.style.overflowY = '';
        document.body.style.height = '';
      }
      this.searchValue = null;
    };
    this.setReverseStylesOn = () => {
      this.isReverse = true;
    };
    this.setReverseStylesOff = () => {
      this.isReverse = false;
    };
  }
  linksHandler(newValue) {
    this.links = newValue;
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.links);
  }
  handleInputChange(event) {
    this.searchValue = event.target.value;
    this.searchValueChange.emit(event.target.value);
  }
  handleBackKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.setTakeoverOff();
    }
    if (ev.key === 'Escape') {
      this.setTakeoverOff();
    }
  }
  handleInputKeyDown(ev) {
    if (ev.key !== 'Tab' && !this.isTakeover) {
      this.setTakeoverOn();
    }
    if (ev.key === 'Escape') {
      this.setTakeoverOff();
    }
  }
  arrayDataWatcher(links) {
    if (typeof links === 'string') {
      this._links = JSON.parse(links);
    }
    else {
      this._links = links;
    }
  }
  componentDidRender() {
    if (this.isFocused) {
      this.isFocused = false;
      this.el.shadowRoot.querySelector('input').focus();
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'wrapper' +
          `${this.isMobile ? ' mobile' : ''}` +
          `${this.isTakeover ? ' takeover' : ''}` },
        this.isMobile && this.isTakeover && (h("div", { class: "chevron", onClick: () => {
            this.setTakeoverOff();
          }, onKeyDown: (ev) => {
            this.handleBackKeyDown(ev);
          } },
          h("arvest-icon", { tabindex: "0", icon: "chevron-left-light" }))),
        h("div", { class: 'searchbar-container' +
            `${this.isReverse ? ' reverse' : ''}` +
            `${this.isMobile ? ' mobile' : ''}` +
            `${this.isTakeover ? ' takeover' : ''}`, onMouseEnter: () => {
            this.setReverseStylesOn();
            this.setMouseOn();
          }, onMouseLeave: () => {
            this.setMouseOff();
            if (!this.isTakeover && !this.isMouseOver) {
              this.setReverseStylesOff();
            }
          } },
          h("div", { class: "searchbar-input-icon-wrapper" },
            h("input", { id: "searchbar-input", name: "searchbar-input", class: "searchbar-input", type: "text", placeholder: "Ask Arvest", "aria-label": "Ask Arvest", value: this.searchValue, onClick: () => {
                this.setTakeoverOn();
              }, onKeyDown: (ev) => {
                this.handleInputKeyDown(ev);
              }, onInput: (event) => {
                this.handleInputChange(event);
              }, onBlur: () => {
                if (!this.isMouseOver) {
                  this.showLinks = false;
                }
              } }),
            h("a", { href: "https://www.arvest.com/askarvest?typeId=0&q=", target: "_blank" },
              h("arvest-icon", { icon: "questionCircleLight", class: this.isReverse ? 'hidden' : '', style: { filter: 'invert(1)' } }),
              h("arvest-icon", { icon: "questionCircleLightHover", class: this.isReverse ? '' : 'hidden' }))),
          this.showLinks &&
            h("div", { class: 'search-results' +
                `${this.isMobile ? ' mobile' : ''}` +
                `${this.isTakeover ? ' takeover' : ''}` },
              h("div", { class: "searchbar-commonsearches--headline" },
                h("arvest-typography", { variant: TypographyVariants.body1 }, "Common searches:")),
              h("div", null,
                this._links.map((link) => (h("div", { class: "searchbar-commonsearches--wrapper--hyperlinks" },
                  h("a", { class: "searchbar-commonsearches--hyperlinks", href: link.href },
                    h("arvest-typography", { color: Color.secondary01, variant: TypographyVariants.body1 }, link.label))))),
                h("div", { class: "searchbar--hyperlinks--wrapper" },
                  h("arvest-typography", { variant: TypographyVariants.body1 },
                    "Need other info?",
                    ' ',
                    h("a", { class: "searchbar--hyperlinks", href: "#" }, "Ask Arvest")))))))));
  }
  static get is() { return "arvest-searchbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-searchbar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-searchbar.css"]
  }; }
  static get properties() { return {
    "links": {
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
        "text": "Array of links as json string."
      },
      "attribute": "links",
      "reflect": false
    },
    "isMobile": {
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
      "attribute": "is-mobile",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "_links": {},
    "isTakeover": {},
    "isReverse": {},
    "isMouseOver": {},
    "showLinks": {},
    "searchValue": {},
    "isFocused": {}
  }; }
  static get events() { return [{
      "method": "searchValueChange",
      "name": "searchValueChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the value entered into search changes. Contains search string."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "links",
      "methodName": "linksHandler"
    }]; }
}
