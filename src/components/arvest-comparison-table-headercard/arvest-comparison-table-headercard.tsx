import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-comparison-table-headercard',
  styleUrl: 'arvest-comparison-table-headercard.css',
  shadow: true
})
export class ArvestComparisonTableHeadercard {
  @Prop() cardTitle: string;

  @Prop() description: string;

  @Prop() cta: string;

  @Prop() hascolor: boolean;

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          class={`card-container ${
            this.hascolor && 'card-container--withcolor'
          }`}
        >
          <div class="card-content">
            <arvest-typography variant={TypographyVariants.h4}>
              {this.cardTitle}
            </arvest-typography>
            <arvest-typography variant={TypographyVariants.caption}>
              {this.description}
            </arvest-typography>
          </div>

          <arvest-button-primary
            label={this.cta}
            issmall
          />
        </div>
      </Host>
    );
  }
}
