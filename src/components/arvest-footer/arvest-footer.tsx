import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants, Color, LogoColor } from '../../global/ts/enums';
import { getOs } from '../../global/ts/globalGetOs';

@Component({
  tag: 'arvest-footer',
  styleUrl: 'arvest-footer.css',
  shadow: true
})

export class ArvestFooter {
  @Prop() withnav?: boolean = true;

  private currentYear = new Date().getFullYear();

  render (): FunctionalComponent {
    return (
      <Host>
        <div class="footer-container">
          <div class="row-01">
            <arvest-logo variant={LogoColor.white} />
            {getOs() === 'MacOS'
              ? <arvest-icon icon="app-store" class="download-icon"/>
              : <arvest-icon icon="play-store" class="download-icon"/>
            }
          </div>
          {this.withnav &&
            <div class="row-02">
              <nav>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    About
                  </arvest-typography>
                </a>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    Careers
                  </arvest-typography>
                </a>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    Contact
                  </arvest-typography>
                </a>
              </nav>
              <nav>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    Rates
                  </arvest-typography>
                </a>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    Education Center
                  </arvest-typography>
                </a>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    {'Documents & Resources'}
                  </arvest-typography>
                </a>
              </nav>
              <nav>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    {'Privacy & Security'}
                  </arvest-typography>
                </a>

                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    {'Terms & Conditions'}
                  </arvest-typography>
                </a>
                <a class="footer-nav-link" href="#">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    color={Color.white}
                  >
                    Site Map
                  </arvest-typography>
                </a>
              </nav>
              <section>
                <div class="row-02--headline">
                  <arvest-typography
                    variant={TypographyVariants.caption}
                    color={Color.white}
                  >
                    How's your Arvest experience today? Let us know.
                  </arvest-typography>
                </div>

                <arvest-button-secondary-reverse
                  issmall
                  label="Take survey"
                />
              </section>
            </div>
          }

          <hr />

          <div class="row-03">
            <section class="row03-firstsection">
              <arvest-typography
                variant={TypographyVariants.caption}
                color={Color.white}
              >
                Copyright © {this.currentYear} Arvest Bank. All Rights Reserved.
              </arvest-typography>
              <div class="icons-container">
                <arvest-icon icon="fdic" class="fdic"/>
              </div>
              <section>
                <slot />
              </section>
            </section>
            <section class="row03-secondsection">
              <arvest-typography
                variant={TypographyVariants.caption}
                color={Color.white}
                class="footer-cta-headline"
              >
                Follow us:
              </arvest-typography>
              <div class="icons-container-socialmedia">
                <arvest-icon icon="arvest-share" class="icon" />
                <arvest-icon icon="dot-facebook" class="icon" />
                <arvest-icon icon="linkedin" class="icon" />
                <arvest-icon icon="twitter" class="icon" />
                <arvest-icon icon="youtube" class="icon" />
              </div>
            </section>
          </div>
        </div>
      </Host>
    );
  }
}
