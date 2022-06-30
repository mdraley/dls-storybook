import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';

@Component({
  tag: 'bootstrap-alert',
  styleUrl: 'bootstrap-alert.css',
  shadow: true
})
export class BootstrapAlert {
  /** Change the color of the component using the Color enum */
  @Prop() color = Color.primary01;

  render () {
    return (
      <Host>
        <div class={`alert alert-${this.color}`} role="alert">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
