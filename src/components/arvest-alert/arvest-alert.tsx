import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';

@Component({
  tag: 'arvest-alert',
  styleUrl: 'arvest-alert.css',
  shadow: true
})

export class ArvestAlert {
  /**
   * Options for the Alert component
   * The types of available alerts are
   * default, alert, confirmation, caution and info.
   * The styles and icons are tied to that selection.
   * [Required]
   */
  @Prop() type: string;

  /** Banner: passing this as true will display the alert as a banner at the top of the page */
  @Prop() banner = false;

  /** Dismissed */
  @Prop({mutable: true}) dismissed = false;

  // Set appropriate icon based on the alert type
  private setIcon () {
    switch (this.type) {
    case 'alert':
      return <arvest-icon icon="exclamation-circle-light" label="Alert" class="icon alert" />;
    case 'caution':
      return <arvest-icon icon="exclamation-triangle-light" label="Caution" class="icon caution" />;
    case 'confirmation':
      return <arvest-icon icon="check-circle-light" label="Confirmation" class="icon confirmation" />;
    case 'info':
      return null;
    default:
      return null;
    }
  }

  private dismissAlert():void {
    this.dismissed = true;
  }

  render (): FunctionalComponent {
    return (
      <Host>
        <div class={this.banner ? 'alert banner' : 'alert inline'} role="alert" aria-hidden={this.dismissed ? 'true' : 'false'}>
          <div class="alert-inner">
            <div class="visual-indicator">
              {this.setIcon()}
            </div>
            <div class="message">
              <slot />
            </div>
            <div class="dismiss">
              <arvest-close-button 
                onClick={() => this.dismissAlert()} 
                label="Close Alert" 
              />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
