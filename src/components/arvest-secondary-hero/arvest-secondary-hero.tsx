import {Component, Host, h, Prop, Listen, State, FunctionalComponent} from '@stencil/core';
import {
  TypographyVariants,
  Color,
  ViewportBreakpoints
} from '../../global/ts/enums';

@Component({
  tag: 'arvest-secondary-hero',
  styleUrl: 'arvest-secondary-hero.css',
  shadow: true
})
export class ArvestSecondaryHero {
  @Prop() header = 'Lorem ipsum.';

  @State() viewport: number;

  @Listen(
    'resize',
    { target: 'window',
      capture: true }
  )
  calcViewport(): void {
    this.viewport = window.innerWidth;
  }

  // eslint-disable-next-line consistent-return
  private calcTypeVariant = (header) => {
    const charNums = header.length;
    if (charNums <= 30) {
      return TypographyVariants.h1;
    } else if (charNums > 30 && charNums <= 60) {
      return TypographyVariants.h2;
    } else if (charNums > 60) {
      return TypographyVariants.h3;
    }
  };

  componentWillRender(): void {
    if (this.header.length > 80) {
      this.header = this.header.slice(
        0,
        80
      );
    }
    this.viewport = window.innerWidth;
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="container">
          <div class="responsive-image-container">
            <arvest-responsive-image alt={this.header} />
          </div>
          <div class="content-container">
            <section class="content-container--grid">
              <div class="content-container--header">
                <arvest-typography
                  variant={this.calcTypeVariant(this.header)}
                  color={
                    this.viewport < ViewportBreakpoints.tablet
                      ? Color.black
                      : Color.white
                  }
                >
                  {this.header}
                </arvest-typography>
              </div>
              <div class="content-container--button">
                <arvest-button-primary label="Button" />
              </div>
            </section>
          </div>
        </div>
      </Host>
    );
  }
}
