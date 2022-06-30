import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';

@Component({
  tag: 'arvest-spinner',
  styleUrl: 'arvest-spinner.css',
  shadow: true
})
export class ArvestSpinner {
  @Prop() isreverse?: boolean;

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          class={`spinner-border ${this.isreverse && 'spinner-border--white'}`}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </Host>
    );
  }
}
