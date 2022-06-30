import { Component, Host, h, Prop, Watch, State, Listen } from '@stencil/core';
import { StepperStates, TypographyVariants, ViewportBreakpoints } from '../../global/ts/enums';
export class ArvestStepper {
  constructor() {
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
    this.getStepCount = () => {
      return this.titles.length > 3 ? 'long' : 'short';
    };
  }
  setTitles(newValue) {
    this.titles = newValue.split(',').slice(0, 5);
  }
  setUrls(newValue) {
    this.urls = newValue.split(',').slice(0, 5);
  }
  setStates(newValue) {
    const states = newValue.split(',').slice(0, 5);
    this.states = states;
  }
  handleResize(e) {
    const window = e.target;
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
  }
  componentWillRender() {
    this.titles = this.stepTitles.split(',').slice(0, 5);
    this.urls = this.stepUrls.split(',').slice(0, 5);
    const states = this.stepStates.split(',').slice(0, 5);
    this.states = states;
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'container ' + this.getStepCount() },
        h("div", { class: "bar" }),
        this.titles.map((title, i) => {
          if (this.states[i] === StepperStates.active) {
            return (h("div", { class: "step" },
              h("div", { class: "active" }),
              h("div", { class: "content" },
                h("arvest-typography", { variant: TypographyVariants.labels }, title))));
          }
          else if (this.states[i] === StepperStates.complete) {
            return (h("div", { class: "step" },
              h("a", { href: this.urls[i] },
                h("div", { class: "complete" }),
                h("div", { class: "content" }, !this.isMobile && (h("arvest-typography", { variant: TypographyVariants.labels }, title))))));
          }
          return (h("div", { class: "step" },
            h("div", { class: "incomplete" }),
            h("div", { class: "content" }, !this.isMobile && (h("arvest-typography", { variant: TypographyVariants.labels }, title)))));
        }))));
  }
  static get is() { return "arvest-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-stepper.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-stepper.css"]
  }; }
  static get properties() { return {
    "stepTitles": {
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
        "text": "The displayed title for each step, in order, comma separated, no spaces, max 5.  *"
      },
      "attribute": "step-titles",
      "reflect": false
    },
    "stepUrls": {
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
        "text": "The step URL, in order, comma separated, no spaces, max 5.  *"
      },
      "attribute": "step-urls",
      "reflect": false
    },
    "stepStates": {
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
        "text": "The step state, in order, comma separated, no spaces, max 5. (active, complete, incomplete)  *"
      },
      "attribute": "step-states",
      "reflect": false
    }
  }; }
  static get states() { return {
    "titles": {},
    "urls": {},
    "states": {},
    "isMobile": {}
  }; }
  static get watchers() { return [{
      "propName": "stepTitles",
      "methodName": "setTitles"
    }, {
      "propName": "stepUrls",
      "methodName": "setUrls"
    }, {
      "propName": "stepStates",
      "methodName": "setStates"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": true,
      "passive": true
    }]; }
}
