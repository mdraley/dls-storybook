import { Component, Host, h } from '@stencil/core';

@Component({
  'tag': 'arvest-collapse',
  'styleUrl': 'arvest-collapse.css',
  'shadow': true
})

export class ArvestCollapse {

  render () {

    return (
      <Host>
        <div class="details-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
