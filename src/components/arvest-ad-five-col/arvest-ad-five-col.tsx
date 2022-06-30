import { Component, Host, h, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-ad-five-col',
  styleUrl: 'arvest-ad-five-col.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class ArvestAdFiveCol {
  @Prop() defaultbg = '/assets/images/pattern.svg'

  /** Ratio options are 5:2 (52), 2:1 (21) */
  @Prop() ratio?: string = '52'

  /** Turn CTA on/off */
  @Prop() showcta?: boolean = true

  /** CTA / Button text */
  @Prop() ctatitle?: string = 'Button'

  /** CTA / Button URL */
  @Prop() url?: string = 'https://www.arvest.com'

  /** Change the background color. Color options: cobalt, ocean, navy. Default is cobalt. */
  @Prop() color?: string = 'cobalt'

  /** Change the background image using bgimage and a full URL as a string. Example: <arvest-ad-five-col bgimage="https://www.arvest.com/someimage.jpg">  The default background is a geometric pattern. */
  @Prop() bgimage?: string = this.defaultbg

  /** Change the opacity of the background image. Use a decimal between 0-1. Default value is 0.5 (50%). [optional] */
  @Prop() opacity?: string = '0.5'

  render() {
    return (
      <Host>
        <div class={'container ' + 'ratio' + this.ratio + ' ' + this.color}>
          <div class="bgimage" style={{ 'background-image': `url(${this.bgimage})`, 'opacity': `${this.opacity}` }}></div>
          <div class="content">
            <div class="headline">
              <arvest-typography variant={TypographyVariants.h3} color={Color.white}>
                <slot></slot>
              </arvest-typography>
            </div>
            {this.showcta ?
              <div class="cta">
                <arvest-button-secondary label={this.ctatitle} issmall={true} isad={true} />
              </div>
              : ''}
          </div>
        </div>
      </Host>
    );
  }
}
