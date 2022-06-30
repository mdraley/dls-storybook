import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-4-col-text-image',
  styleUrl: 'arvest-card-4-col-text-image.css',
  shadow: true
})

export class ArvestCard4ColTextImage {
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
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...';

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

  /** Card three link URL */
  @Prop() linkthree?: string = '#';

  // CTA PROPS
  /** Label for the CTA */
  @Prop() ctalabel?: string = 'Read more';

  /** CTA Link */
  @Prop() ctalink?: string = '#'

  /*
   * CLICK HANDLER
   * Update the function below with the preferred
   * action and target for all links.
   */
  private cardClick = (href) => {
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
            <div class="card" onClick={() => this.cardClick(this.linkone)}>
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
              </div>
            </div>

            <div class="card" onClick={() => this.cardClick(this.linktwo)}>
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
              </div>
            </div>

            <div class="card" onClick={() => this.cardClick(this.linkthree)}>
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
              </div>
            </div>
          </div>

          <div class="cta">
            <arvest-button-tertiary
              label={this.ctalabel}
              onClick={() => this.cardClick(this.ctalink)}
            />
          </div>
        </div>
      </Host>
    );
  }
}
