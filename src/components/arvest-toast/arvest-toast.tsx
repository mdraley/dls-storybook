import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'arvest-toast',
  styleUrl: 'arvest-toast.css',
  shadow: true
})
export class ArvestToast {

  @Prop() show = true;

  @Prop() imgsrc?: string;

  @Prop() imgalt?: string;

  private handleClose = () => this.show = false;

  render () {
    return (
      <Host>
        <div class={`toast fade ${this.show ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            {this.imgsrc && <img src={this.imgsrc} class="rounded mr-2" alt={this.imgalt} />}
            <strong class="mr-auto">Bootstrap</strong>
            <small class="text-muted">11 mins ago</small>
            <button onClick={this.handleClose} type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
