import {Component, Host, Prop, h, FunctionalComponent} from '@stencil/core';
import { Color } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-buttongroup',
  'styleUrl': 'arvest-buttongroup.css',
  'shadow': true
})

export class ArvestButtongroup {

    /** Change the color of the component using the Color enum */
    @Prop() color?: Color;

    /** Aria Label for screen readers [Required] */
    @Prop() ariaLabel: string;

    render(): FunctionalComponent {
      return (
        <Host>
          <div class={`btn-group btn-group-${this.color}`} role="group" aria-label={`${this.ariaLabel}`}>
            <slot />
          </div>
        </Host>
      );
    }
}
