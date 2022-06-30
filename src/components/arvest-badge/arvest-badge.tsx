import {Component, Host, Prop, h, FunctionalComponent} from '@stencil/core';
import { BadgeColor } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-badge',
  'styleUrl': 'arvest-badge.css',
  'shadow': true
})

export class ArvestBadge {

  /** Background color of the badge */
  @Prop() color: BadgeColor = BadgeColor.label;

  render (): FunctionalComponent {
    return (
      <Host>
        <span class={`badge${typeof this.color === 'string' ? ` badge-${this.color}` : ''}`}>
          <slot />
        </span>
      </Host>
    );
  }
}
