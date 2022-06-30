import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'arvest-responsive-image',
  styleUrl: 'arvest-responsive-image.css',
  shadow: true
})

export class ArvestResponsiveImage {
  /** Alternative text for accesibility */
  @Prop() alt: string;

  /** Image source link */
  @Prop() src: string = 'https://www.arvest.com/images/dls/1742x1097/1.jpg';

  @Prop() containerratio = '2.5';

  @Prop() itemratio = '2.5';

  render() {
    return (
      <Host>
        <div
          style={{ height: `calc(100vw /${this.containerratio})` }}
          class="image-container"
        >
          <img
            class="image-item"
            style={{ height: `calc(100vw/${this.itemratio})` }}
            alt={this.alt}
            src={this.src}
          />
        </div>
      </Host>
    );
  }
}
