import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';

@Component({
  tag: 'arvest-primary-carousel-mobilebtns',
  styleUrl: 'arvest-primary-carousel-mobilebtns.css',
  shadow: true
})
export class ArvestPrimaryCarouselMobilebtns {
  @Prop() isactive = false;

  @Prop() color = Color.white;

  render () {
    return (
      <Host>
        <button
          style={!this.isactive && { backgroundColor: `var(--${this.color})` }}
          class={`slide-index-circle
          ${this.isactive && 'slide-index-circle--active'}
          `}
        ></button>
      </Host>
    );
  }
}
