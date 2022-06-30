import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arvest-max-container',
  styleUrl: 'arvest-max-container.css',
  shadow: true
})
export class ArvestMaxContainer {
  render () {
    return (
      <Host>
        <div class="max-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
