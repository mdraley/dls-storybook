import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';

@Component({
  tag: 'arvest-jumbotron',
  styleUrl: 'arvest-jumbotron.css',
  shadow: true
})

export class ArvestJumbotron {
  /** Headline */
  @Prop() headline?: string = 'Hello, world!';

  /** Subhead */
  @Prop() subhead?: string =
    'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';

  /** Body */
  @Prop() body?: string =
    'It uses utility classes for typography and spacing to space content out within the larger container.';

  /** Button Label */
  @Prop() label?: string = 'Button Description';

  /** Button Color */
  @Prop() buttoncolor: Color = Color.primary01;

  render () {
    return (
      <Host>
        <div class="jumbotron">
          <h1 class="display-4">{this.headline}</h1>
          <p class="lead">{this.subhead}</p>
          <hr class="my-4" />
          <p>{this.body}</p>
          <arvest-button-primary
            color={this.buttoncolor}
            label={this.label}
            role="button"
          ></arvest-button-primary>
        </div>
      </Host>
    );
  }
}
