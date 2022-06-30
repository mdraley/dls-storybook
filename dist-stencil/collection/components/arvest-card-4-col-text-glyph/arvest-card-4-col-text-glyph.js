import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
import Checks from '../../assets/glyphs/checks.svg';
import Map from '../../assets/glyphs/map.svg';
import Rates from '../../assets/glyphs/rates.svg';
export class ArvestCard4ColTextGlyph {
  constructor() {
    /** Main headline for the component */
    this.mainheadline = 'Helpful resources';
    // CARD ONE PROPS
    /** Card one glyph alt text [Required] */
    this.altone = 'This icon needs a description';
    /** Card one title [Required] */
    this.titleone = 'Title one';
    /** Card one body text [Required] */
    this.bodyone = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';
    /** Card one link URL */
    this.linkone = '#';
    // CARD TWO PROPS
    /** Card two glyph alt text [Required] */
    this.alttwo = 'This icon needs a description';
    /** Card two title [Required] */
    this.titletwo = 'Title two';
    /** Card two body text [Required] */
    this.bodytwo = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';
    /** Card two link URL */
    this.linktwo = '#';
    // CARD THREE PROPS
    /** Card three glyph alt text [Required] */
    this.altthree = 'This icon needs a description';
    /** Card three title [Required] */
    this.titlethree = 'Title three';
    /** Card three body text [Required] */
    this.bodythree = 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';
    /** Card three link URL */
    this.linkthree = '#';
    /*
     * CLICK HANDLER
     * Update the function below with the preferred
     * action and target for all links.
     */
    this.cardClick = (href) => {
      alert(href);
    };
  }
  render() {
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "headline" },
          h("arvest-typography", { variant: TypographyVariants.h3 }, this.mainheadline)),
        h("div", { class: "card-container" },
          h("div", { class: "card" },
            h("div", { class: "glyph" },
              h("img", { src: Checks, alt: this.altone })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titleone),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodyone),
              h("arvest-button-tertiary", { class: "cta", label: "Get info", onClick: () => this.cardClick(this.linkone) }))),
          h("div", { class: "card" },
            h("div", { class: "glyph" },
              h("img", { src: Map, alt: this.alttwo })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titletwo),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodytwo),
              h("arvest-button-tertiary", { class: "cta", label: "Get info", onClick: () => this.cardClick(this.linktwo) }))),
          h("div", { class: "card" },
            h("div", { class: "glyph" },
              h("img", { src: Rates, alt: this.altthree })),
            h("div", { class: "card-content" },
              h("arvest-typography", { variant: TypographyVariants.h4, class: "card-title" }, this.titlethree),
              h("arvest-typography", { variant: TypographyVariants.body1, class: "card-body" }, this.bodythree),
              h("arvest-button-tertiary", { class: "cta", label: "Get info", onClick: () => this.cardClick(this.linkthree) })))))));
  }
  static get is() { return "arvest-card-4-col-text-glyph"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-card-4-col-text-glyph.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-card-4-col-text-glyph.css"]
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
      "defaultValue": "'Helpful resources'"
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
        "text": "Card one glyph alt text [Required]"
      },
      "attribute": "altone",
      "reflect": false,
      "defaultValue": "'This icon needs a description'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis'"
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
        "text": "Card two glyph alt text [Required]"
      },
      "attribute": "alttwo",
      "reflect": false,
      "defaultValue": "'This icon needs a description'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis'"
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
        "text": "Card three glyph alt text [Required]"
      },
      "attribute": "altthree",
      "reflect": false,
      "defaultValue": "'This icon needs a description'"
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
      "defaultValue": "'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis'"
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
    }
  }; }
}
