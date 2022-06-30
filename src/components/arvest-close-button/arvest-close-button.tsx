import { Component, Host, h, FunctionalComponent, Prop } from '@stencil/core';

@Component({
  tag: 'arvest-close-button',
  styleUrl: 'arvest-close-button.css',
  shadow: true
})
export class ArvestCloseButton {

  @Prop() label = 'Close';

  render():FunctionalComponent {
    return (
      <Host>
        <div class="closeButton__background">
          <button class="closeButton">
            <arvest-icon 
              icon="times-light"
              label={this.label}
              aria-label={this.label}
              class="closeButton__icon"
            />
          </button>
        </div>
      </Host>
    );
  }
}
