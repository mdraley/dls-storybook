import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arvest-footer-content',
  styleUrl: 'arvest-footer-content.css',
  shadow: true
})
export class ArvestFooterContent {
  render () {
    return (
      <Host>
        <slot name="header"></slot>
        <section>
          <ul class="footer-list">
            <slot name="list-item"></slot>
          </ul>
        </section>
      </Host>
    );
  }
}
