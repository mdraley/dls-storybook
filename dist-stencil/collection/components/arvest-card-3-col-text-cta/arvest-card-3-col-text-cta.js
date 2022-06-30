import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestCard3ColTextCta {
  constructor() {
    /** Main headline for the component */
    this.mainheadline = 'How can we help?';
    // CARD ONE PROPS
    /** Card one title [Required] */
    this.titleone = 'Arvest Go mobile banking';
    /** Card one body text [Required] */
    this.bodyone = 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.';
    /** Card one cta label */
    this.ctaone = 'Get started';
    /** Card one cta URL */
    this.linkone = '#';
    // CARD TWO PROPS
    /** Card two title [Required] */
    this.titletwo = 'Personal banking';
    /** Card two body text [Required] */
    this.bodytwo = 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet.';
    /** Card two cta label */
    this.ctatwo = 'Get info';
    /** Card two cta URL */
    this.linktwo = '#';
    // CARD THREE PROPS
    /** Card three title [Required] */
    this.titlethree = 'Get the financing you need';
    /** Card three body text [Required] */
    this.bodythree = 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet ipsum dolor.';
    /** Card three cta label */
    this.ctathree = 'Apply now';
    /** Card three cta URL */
    this.linkthree = '#';
    // CARD FOUR PROPS
    /** Card four title [Required] */
    this.titlefour = 'Business banking';
    /** Card four body text [Required] */
    this.bodyfour = 'Lorem ipsum dolor sit amet, consetctetur, adipiscing, elit ut aliquam, purus sit amet.';
    /** Card four cta label */
    this.ctafour = 'Get info';
    /** Card four cta URL */
    this.linkfour = '#';
    /*
     * CLICK HANDLER
     * Update the function below with the preferred
     * action and target for all links.
     */
    this.clickFunction = (href) => {
      alert(href);
    };
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "headline" },
          h("arvest-typography", { variant: TypographyVariants.h2 }, this.mainheadline)),
        h("div", { class: "card-container" },
          h("div", { class: "card" },
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titleone),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodyone),
              h("arvest-button-tertiary", { class: "cta", label: this.ctaone, onClick: () => this.clickFunction(this.linkone) }))),
          h("div", { class: "card" },
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titletwo),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodytwo),
              h("arvest-button-tertiary", { class: "cta", label: this.ctatwo, onClick: () => this.clickFunction(this.linktwo) }))),
          h("div", { class: "card" },
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titlethree),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodythree),
              h("arvest-button-tertiary", { class: "cta", label: this.ctathree, onClick: () => this.clickFunction(this.linkthree) }))),
          h("div", { class: "card" },
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titlefour),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodyfour),
              h("arvest-button-tertiary", { class: "cta", label: this.ctafour, onClick: () => this.clickFunction(this.linkfour) })))))));
  }
  static get is() { return "arvest-card-3-col-text-cta"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card-3-col-text-cta.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card-3-col-text-cta.css"]
  }; }
  static get properties() { return {
    "mainheadline": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Main headline for the component"
      },
      "attribute": "mainheadline",
      "reflect": false,
      "defaultValue": "'How can we help?'"
    },
    "titleone": {
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
        "text": "Card one title [Required]"
      },
      "attribute": "titleone",
      "reflect": false,
      "defaultValue": "'Arvest Go mobile banking'"
    },
    "bodyone": {
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
        "text": "Card one body text [Required]"
      },
      "attribute": "bodyone",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.'"
    },
    "ctaone": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card one cta label"
      },
      "attribute": "ctaone",
      "reflect": false,
      "defaultValue": "'Get started'"
    },
    "linkone": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card one cta URL"
      },
      "attribute": "linkone",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "titletwo": {
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
        "text": "Card two title [Required]"
      },
      "attribute": "titletwo",
      "reflect": false,
      "defaultValue": "'Personal banking'"
    },
    "bodytwo": {
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
        "text": "Card two body text [Required]"
      },
      "attribute": "bodytwo",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet.'"
    },
    "ctatwo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card two cta label"
      },
      "attribute": "ctatwo",
      "reflect": false,
      "defaultValue": "'Get info'"
    },
    "linktwo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card two cta URL"
      },
      "attribute": "linktwo",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "titlethree": {
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
        "text": "Card three title [Required]"
      },
      "attribute": "titlethree",
      "reflect": false,
      "defaultValue": "'Get the financing you need'"
    },
    "bodythree": {
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
        "text": "Card three body text [Required]"
      },
      "attribute": "bodythree",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet ipsum dolor.'"
    },
    "ctathree": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card three cta label"
      },
      "attribute": "ctathree",
      "reflect": false,
      "defaultValue": "'Apply now'"
    },
    "linkthree": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card three cta URL"
      },
      "attribute": "linkthree",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "titlefour": {
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
        "text": "Card four title [Required]"
      },
      "attribute": "titlefour",
      "reflect": false,
      "defaultValue": "'Business banking'"
    },
    "bodyfour": {
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
        "text": "Card four body text [Required]"
      },
      "attribute": "bodyfour",
      "reflect": false,
      "defaultValue": "'Lorem ipsum dolor sit amet, consetctetur, adipiscing, elit ut aliquam, purus sit amet.'"
    },
    "ctafour": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card four cta label"
      },
      "attribute": "ctafour",
      "reflect": false,
      "defaultValue": "'Get info'"
    },
    "linkfour": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Card four cta URL"
      },
      "attribute": "linkfour",
      "reflect": false,
      "defaultValue": "'#'"
    }
  }; }
}
