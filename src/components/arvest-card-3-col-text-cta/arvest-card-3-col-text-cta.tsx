import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-3-col-text-cta',
  styleUrl: 'arvest-card-3-col-text-cta.css',
  shadow: true
})

export class ArvestCard3ColTextCta {

  /** Main headline for the component */
  @Prop() mainheadline?: string = 'How can we help?';

  // CARD ONE PROPS
  /** Card one title [Required] */
  @Prop() titleone = 'Arvest Go mobile banking';

  /** Card one body text [Required] */
  @Prop() bodyone =
    'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.';

  /** Card one cta label */
  @Prop() ctaone?: string = 'Get started';

  /** Card one cta URL */
  @Prop() linkone?: string = '#';


  // CARD TWO PROPS
  /** Card two title [Required] */
  @Prop() titletwo = 'Personal banking';

  /** Card two body text [Required] */
  @Prop() bodytwo =
    'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet.';

  /** Card two cta label */
  @Prop() ctatwo?: string = 'Get info';

  /** Card two cta URL */
  @Prop() linktwo?: string = '#';


  // CARD THREE PROPS
  /** Card three title [Required] */
  @Prop() titlethree = 'Get the financing you need';

  /** Card three body text [Required] */
  @Prop() bodythree =
    'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet ipsum dolor.';

  /** Card three cta label */
  @Prop() ctathree?: string = 'Apply now';

  /** Card three cta URL */
  @Prop() linkthree?: string = '#';


  // CARD FOUR PROPS
  /** Card four title [Required] */
  @Prop() titlefour = 'Business banking';

  /** Card four body text [Required] */
  @Prop() bodyfour =
    'Lorem ipsum dolor sit amet, consetctetur, adipiscing, elit ut aliquam, purus sit amet.';

  /** Card four cta label */
  @Prop() ctafour?: string = 'Get info';

  /** Card four cta URL */
  @Prop() linkfour?: string = '#';


  /*
   * CLICK HANDLER
   * Update the function below with the preferred
   * action and target for all links.
   */
  private clickFunction = (href) => {
    alert(href);
  };

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="container">
          <div class="headline">
            <arvest-typography variant={TypographyVariants.h2}>
              {this.mainheadline}
            </arvest-typography>
          </div>

          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <arvest-typography
                  variant={TypographyVariants.h4}
                  class="card-title"
                >
                  {this.titleone}
                </arvest-typography>
                <arvest-typography
                  variant={TypographyVariants.body1}
                  class="card-body"
                >
                  {this.bodyone}
                </arvest-typography>
                <arvest-button-tertiary
                  class="cta"
                  label={this.ctaone}
                  onClick={() => this.clickFunction(this.linkone)}
                />
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <arvest-typography
                  variant={TypographyVariants.h4}
                  class="card-title"
                >
                  {this.titletwo}
                </arvest-typography>
                <arvest-typography
                  variant={TypographyVariants.body1}
                  class="card-body"
                >
                  {this.bodytwo}
                </arvest-typography>
                <arvest-button-tertiary
                  class="cta"
                  label={this.ctatwo}
                  onClick={() => this.clickFunction(this.linktwo)}
                />
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <arvest-typography
                  variant={TypographyVariants.h4}
                  class="card-title"
                >
                  {this.titlethree}
                </arvest-typography>
                <arvest-typography
                  variant={TypographyVariants.body1}
                  class="card-body"
                >
                  {this.bodythree}
                </arvest-typography>
                <arvest-button-tertiary
                  class="cta"
                  label={this.ctathree}
                  onClick={() => this.clickFunction(this.linkthree)}
                />
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <arvest-typography
                  variant={TypographyVariants.h4}
                  class="card-title"
                >
                  {this.titlefour}
                </arvest-typography>
                <arvest-typography
                  variant={TypographyVariants.body1}
                  class="card-body"
                >
                  {this.bodyfour}
                </arvest-typography>

                <arvest-button-tertiary
                  class="cta"
                  label={this.ctafour}
                  onClick={() => this.clickFunction(this.linkfour)}
                />
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
