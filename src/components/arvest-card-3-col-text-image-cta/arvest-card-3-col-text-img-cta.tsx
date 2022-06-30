import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-3-col-text-img-cta',
  styleUrl: 'arvest-card-3-col-text-img-cta.css',
  shadow: true
})

export class ArvestCard3ColTextImageCta {
  /** Main headline for the component */
  @Prop() mainheadline?: string = 'News and stories';

  /** Card one image URL [Required] */
  @Prop() imageone = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card one image alt text [Required] */
  @Prop() altone = 'This is an image';

  /** Card one title [Required] */
  @Prop() titleone = 'Title one';

  /** Card one body text [Required] */
  @Prop() bodyone =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';

  /** Card one cta label */
  @Prop() ctaone?: string = 'Get started';

  /** Card one link URL */
  @Prop() linkone?: string = '#';


  // CARD TWO PROPS
  /** Card two image URL [Required] */
  @Prop() imagetwo = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card two image alt text [Required] */
  @Prop() alttwo = 'This is an image';

  /** Card two title [Required] */
  @Prop() titletwo = 'Title two';

  /** Card two body text [Required] */
  @Prop() bodytwo =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';

  /** Card one cta label */
  @Prop() ctatwo?: string = 'Get started';

  /** Card two link URL */
  @Prop() linktwo?: string = '#';


  // CARD THREE PROPS
  /** Card three image URL [Required] */
  @Prop() imagethree = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card three image alt text [Required] */
  @Prop() altthree = 'This is an image';

  /** Card three title [Required] */
  @Prop() titlethree = 'Title three';

  /** Card three body text [Required] */
  @Prop() bodythree =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';

  /** Card one cta label */
  @Prop() ctathree?: string = 'Get started';

  /** Card three link URL */
  @Prop() linkthree?: string = '#';


  // CARD FOUR PROPS
  /** Card four image URL [Required] */
  @Prop() imagefour = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card four image alt text [Required] */
  @Prop() altfour = 'This is an image';

  /** Card four title [Required] */
  @Prop() titlefour = 'Title four';

  /** Card four body text [Required] */
  @Prop() bodyfour =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';

  /** Card one cta label */
  @Prop() ctafour?: string = 'Get started';

  /** Card four link URL */
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
              <div class="image">
                <img src={this.imageone} alt={this.altone} />
              </div>
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
              <div class="image">
                <img src={this.imagetwo} alt={this.alttwo} />
              </div>
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
              <div class="image">
                <img src={this.imagethree} alt={this.altthree} />
              </div>
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
              <div class="image">
                <img src={this.imagefour} alt={this.altfour} />
              </div>
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
