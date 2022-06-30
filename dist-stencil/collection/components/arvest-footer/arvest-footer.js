import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyVariants, Color, LogoColor } from '../../global/ts/enums';
import { getOs } from '../../global/ts/globalGetOs';
export class ArvestFooter {
  constructor() {
    this.withnav = true;
    this.currentYear = new Date().getFullYear();
  }
  render() {
    return (h(Host, null,
      h("div", { class: "footer-container" },
        h("div", { class: "row-01" },
          h("arvest-logo", { variant: LogoColor.white }),
          getOs() === 'MacOS'
            ? h("arvest-icon", { icon: "app-store", class: "download-icon" })
            : h("arvest-icon", { icon: "play-store", class: "download-icon" })),
        this.withnav &&
          h("div", { class: "row-02" },
            h("nav", null,
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "About")),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Careers")),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Contact"))),
            h("nav", null,
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Rates")),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Education Center")),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, 'Documents & Resources'))),
            h("nav", null,
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, 'Privacy & Security')),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, 'Terms & Conditions')),
              h("a", { class: "footer-nav-link", href: "#" },
                h("arvest-typography", { variant: TypographyVariants.navigation, color: Color.white }, "Site Map"))),
            h("section", null,
              h("div", { class: "row-02--headline" },
                h("arvest-typography", { variant: TypographyVariants.caption, color: Color.white }, "How's your Arvest experience today? Let us know.")),
              h("arvest-button-secondary-reverse", { issmall: true, label: "Take survey" }))),
        h("hr", null),
        h("div", { class: "row-03" },
          h("section", { class: "row03-firstsection" },
            h("arvest-typography", { variant: TypographyVariants.caption, color: Color.white },
              "Copyright \u00A9 ",
              this.currentYear,
              " Arvest Bank. All Rights Reserved."),
            h("div", { class: "icons-container" },
              h("arvest-icon", { icon: "fdic", class: "fdic" })),
            h("section", null,
              h("slot", null))),
          h("section", { class: "row03-secondsection" },
            h("arvest-typography", { variant: TypographyVariants.caption, color: Color.white, class: "footer-cta-headline" }, "Follow us:"),
            h("div", { class: "icons-container-socialmedia" },
              h("arvest-icon", { icon: "arvest-share", class: "icon" }),
              h("arvest-icon", { icon: "dot-facebook", class: "icon" }),
              h("arvest-icon", { icon: "linkedin", class: "icon" }),
              h("arvest-icon", { icon: "twitter", class: "icon" }),
              h("arvest-icon", { icon: "youtube", class: "icon" })))))));
  }
  static get is() { return "arvest-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-footer.css"]
  }; }
  static get properties() { return {
    "withnav": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "withnav",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
}
