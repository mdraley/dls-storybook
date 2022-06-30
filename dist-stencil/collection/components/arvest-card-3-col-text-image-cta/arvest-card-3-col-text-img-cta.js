import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
export class ArvestCard3ColTextImageCta {
  constructor() {
    /** Main headline for the component */
    this.mainheadline = 'News and stories';
    /** Card one image URL [Required] */
    this.imageone = 'https://www.arvest.com/images/dls/500x315/1.jpg';
    /** Card one image alt text [Required] */
    this.altone = 'This is an image';
    /** Card one title [Required] */
    this.titleone = 'Title one';
    /** Card one body text [Required] */
    this.bodyone = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';
    /** Card one cta label */
    this.ctaone = 'Get started';
    /** Card one link URL */
    this.linkone = '#';
    // CARD TWO PROPS
    /** Card two image URL [Required] */
    this.imagetwo = 'https://www.arvest.com/images/dls/500x315/1.jpg';
    /** Card two image alt text [Required] */
    this.alttwo = 'This is an image';
    /** Card two title [Required] */
    this.titletwo = 'Title two';
    /** Card two body text [Required] */
    this.bodytwo = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';
    /** Card one cta label */
    this.ctatwo = 'Get started';
    /** Card two link URL */
    this.linktwo = '#';
    // CARD THREE PROPS
    /** Card three image URL [Required] */
    this.imagethree = 'https://www.arvest.com/images/dls/500x315/1.jpg';
    /** Card three image alt text [Required] */
    this.altthree = 'This is an image';
    /** Card three title [Required] */
    this.titlethree = 'Title three';
    /** Card three body text [Required] */
    this.bodythree = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';
    /** Card one cta label */
    this.ctathree = 'Get started';
    /** Card three link URL */
    this.linkthree = '#';
    // CARD FOUR PROPS
    /** Card four image URL [Required] */
    this.imagefour = 'https://www.arvest.com/images/dls/500x315/1.jpg';
    /** Card four image alt text [Required] */
    this.altfour = 'This is an image';
    /** Card four title [Required] */
    this.titlefour = 'Title four';
    /** Card four body text [Required] */
    this.bodyfour = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';
    /** Card one cta label */
    this.ctafour = 'Get started';
    /** Card four link URL */
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
            h("div", { class: "image" },
              h("img", { src: this.imageone, alt: this.altone })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titleone),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodyone),
              h("arvest-button-tertiary", { class: "cta", label: this.ctaone, onClick: () => this.clickFunction(this.linkone) }))),
          h("div", { class: "card" },
            h("div", { class: "image" },
              h("img", { src: this.imagetwo, alt: this.alttwo })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titletwo),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodytwo),
              h("arvest-button-tertiary", { class: "cta", label: this.ctatwo, onClick: () => this.clickFunction(this.linktwo) }))),
          h("div", { class: "card" },
            h("div", { class: "image" },
              h("img", { src: this.imagethree, alt: this.altthree })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titlethree),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodythree),
              h("arvest-button-tertiary", { class: "cta", label: this.ctathree, onClick: () => this.clickFunction(this.linkthree) }))),
          h("div", { class: "card" },
            h("div", { class: "image" },
              h("img", { src: this.imagefour, alt: this.altfour })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titlefour),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodyfour),
              h("arvest-button-tertiary", { class: "cta", label: this.ctafour, onClick: () => this.clickFunction(this.linkfour) })))))));
  }
  static get is() { return "arvest-card-3-col-text-img-cta"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card-3-col-text-img-cta.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card-3-col-text-img-cta.css"]
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
      "defaultValue": "'News and stories'"
    },
    "imageone": {
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
        "text": "Card one image URL [Required]"
      },
      "attribute": "imageone",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/images/dls/500x315/1.jpg'"
    },
    "altone": {
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
        "text": "Card one image alt text [Required]"
      },
      "attribute": "altone",
      "reflect": false,
      "defaultValue": "'This is an image'"
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
      "defaultValue": "'Title one'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...'"
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
        "text": "Card one link URL"
      },
      "attribute": "linkone",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "imagetwo": {
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
        "text": "Card two image URL [Required]"
      },
      "attribute": "imagetwo",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/images/dls/500x315/1.jpg'"
    },
    "alttwo": {
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
        "text": "Card two image alt text [Required]"
      },
      "attribute": "alttwo",
      "reflect": false,
      "defaultValue": "'This is an image'"
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
      "defaultValue": "'Title two'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...'"
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
        "text": "Card one cta label"
      },
      "attribute": "ctatwo",
      "reflect": false,
      "defaultValue": "'Get started'"
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
        "text": "Card two link URL"
      },
      "attribute": "linktwo",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "imagethree": {
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
        "text": "Card three image URL [Required]"
      },
      "attribute": "imagethree",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/images/dls/500x315/1.jpg'"
    },
    "altthree": {
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
        "text": "Card three image alt text [Required]"
      },
      "attribute": "altthree",
      "reflect": false,
      "defaultValue": "'This is an image'"
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
      "defaultValue": "'Title three'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...'"
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
        "text": "Card one cta label"
      },
      "attribute": "ctathree",
      "reflect": false,
      "defaultValue": "'Get started'"
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
        "text": "Card three link URL"
      },
      "attribute": "linkthree",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "imagefour": {
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
        "text": "Card four image URL [Required]"
      },
      "attribute": "imagefour",
      "reflect": false,
      "defaultValue": "'https://www.arvest.com/images/dls/500x315/1.jpg'"
    },
    "altfour": {
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
        "text": "Card four image alt text [Required]"
      },
      "attribute": "altfour",
      "reflect": false,
      "defaultValue": "'This is an image'"
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
      "defaultValue": "'Title four'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...'"
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
        "text": "Card one cta label"
      },
      "attribute": "ctafour",
      "reflect": false,
      "defaultValue": "'Get started'"
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
        "text": "Card four link URL"
      },
      "attribute": "linkfour",
      "reflect": false,
      "defaultValue": "'#'"
    }
  }; }
}
