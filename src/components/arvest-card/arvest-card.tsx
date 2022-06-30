import { Component, Host, Prop, h } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card',
  styleUrl: 'arvest-card.css',
  shadow: true
})
export class ArvestCard {
  /** URL for Image*/
  @Prop() cardimgsrc?: string;

  /** Alt text for image*/
  @Prop() cardimgalt?: string;

  /** Title text*/
  @Prop() cardtitle?: string;

  /** Body text*/
  @Prop() cardtext?: string;

  private color = Color.primary01;

  render () {
    return (
      <Host>
        <div class="card">
          <img
            class="card-img-top"
            src={this.cardimgsrc}
            alt={this.cardimgalt}
          />
          <div class="card-body">
            <arvest-typography class="card-title" variant={TypographyVariants.h4}>
              {this.cardtitle}
            </arvest-typography>
            <arvest-typography class="card-text" variant={TypographyVariants.body1}>
              {this.cardtext}
            </arvest-typography>
            <arvest-button-primary
              color={this.color}
              label="Button Description"
            ></arvest-button-primary>
          </div>
        </div>
      </Host>
    );
  }
}
