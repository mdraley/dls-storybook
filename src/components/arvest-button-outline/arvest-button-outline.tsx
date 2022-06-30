import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-button-outline',
  styleUrl: 'arvest-button-outline.css',
  shadow: true
})
export class ArvestButtonOutline {
  @Prop() label = 'Button';

  render(): FunctionalComponent {
    return (
      <Host>
        <button class="button-outline" aria-label={this.label}>
          <arvest-typography
            color={Color.white}
            variant={TypographyVariants.body1}
          >
            <slot />
          </arvest-typography>
        </button>
      </Host>
    );
  }
}
