import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-4-col-text-img-cta',
  styleUrl: 'arvest-card-4-col-text-img-cta.css',
  shadow: true
})

export class ArvestCard4ColTextImgCta {
  /** Main headline for the component */
  @Prop() mainheadline?: string = 'News and stories';

  // CARD ONE PROPS
  /** Card one image URL [Required] */
  @Prop() imageone = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card one image alt text [Required] */
  @Prop() altone = 'This is an image';

  /** Card one title [Required] */
  @Prop() titleone = 'Title one';

  /** Card one body text [Required] */
  @Prop() bodyone =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.';

  /** Card one CTA Text [Required] */
  @Prop() ctaone = 'Apply now';

  /** Card one link URL [Required] */
  @Prop() linkone = '#';


  // CARD TWO PROPS
  /** Card two image URL [Required] */
  @Prop() imagetwo = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card two image alt text [Required] */
  @Prop() alttwo = 'This is an image';

  /** Card two title [Required] */
  @Prop() titletwo = 'Title two';

  /** Card two body text [Required] */
  @Prop() bodytwo =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.';

  /** Card two CTA Text [Required] */
  @Prop() ctatwo = 'Apply now';

  /** Card two link URL [Required] */
  @Prop() linktwo = '#';


  // CARD THREE PROPS
  /** Card three image URL [Required] */
  @Prop() imagethree = 'https://www.arvest.com/images/dls/500x315/1.jpg';

  /** Card three image alt text [Required] */
  @Prop() altthree = 'This is an image';

  /** Card three title [Required] */
  @Prop() titlethree = 'Title three';

  /** Card three body text [Required] */
  @Prop() bodythree =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.';

  /** Card three CTA Text [Required] */
  @Prop() ctathree = 'Apply now';

  /** Card three link URL [Required] */
  @Prop() linkthree = '#';

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
          </div>

        </div>
      </Host>
    );
  }
}
