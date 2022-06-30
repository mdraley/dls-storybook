import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
import Checks from '../../assets/glyphs/checks.svg';
import Map from '../../assets/glyphs/map.svg';
import Rates from '../../assets/glyphs/rates.svg';

@Component({
  tag: 'arvest-card-4-col-text-glyph',
  styleUrl: 'arvest-card-4-col-text-glyph.css',
  shadow: true
})

export class ArvestCard4ColTextGlyph {

  /** Main headline for the component */
  @Prop() mainheadline?: string = 'Helpful resources';

  // CARD ONE PROPS
  /** Card one glyph alt text [Required] */
  @Prop() altone = 'This icon needs a description';

  /** Card one title [Required] */
  @Prop() titleone = 'Title one';

  /** Card one body text [Required] */
  @Prop() bodyone =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';

  /** Card one link URL */
  @Prop() linkone?: string = '#';


  // CARD TWO PROPS
  /** Card two glyph alt text [Required] */
  @Prop() alttwo = 'This icon needs a description';

  /** Card two title [Required] */
  @Prop() titletwo = 'Title two';

  /** Card two body text [Required] */
  @Prop() bodytwo =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';

  /** Card two link URL */
  @Prop() linktwo?: string = '#';


  // CARD THREE PROPS
  /** Card three glyph alt text [Required] */
  @Prop() altthree = 'This icon needs a description';

  /** Card three title [Required] */
  @Prop() titlethree = 'Title three';

  /** Card three body text [Required] */
  @Prop() bodythree =
    'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis';

  /** Card three link URL */
  @Prop() linkthree?: string = '#';

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
            <arvest-typography variant={TypographyVariants.h3}>
              {this.mainheadline}
            </arvest-typography>
          </div>

          <div class="card-container">

            <div class="card">
              <div class="glyph">
                <img src={Checks} alt={this.altone} />
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
                  label="Get info"
                  onClick={() => this.cardClick(this.linkone)}
                />
              </div>
            </div>

            <div class="card">
              <div class="glyph">
                <img src={Map} alt={this.alttwo} />
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
                  label="Get info"
                  onClick={() => this.cardClick(this.linktwo)}
                />
              </div>
            </div>

            <div class="card">
              <div class="glyph">
                <img src={Rates} alt={this.altthree} />
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
                  label="Get info"
                  onClick={() => this.cardClick(this.linkthree)}
                />
              </div>
            </div>
          </div>

        </div>
      </Host>
    );
  }
}
