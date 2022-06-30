import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arvest-modal-footer',
  styleUrl: 'arvest-modal-footer.css',
  shadow: true
})
export class ArvestModalFooter {

  render () {
    return (
      <Host>
        <footer class="modal-footer">
          <slot></slot>
        </footer>
      </Host>
    );
  }

}
