import { Component, h, Host, FunctionalComponent, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'arvest-button-two-up',
  styleUrl: 'arvest-button-two-up.css',
  shadow: true
})

export class ArvestButtonTwoUp {

  /** Primary button title.  **/
  @Prop() primaryTitle: string;

  /** Primary button url.  **/
  @Prop() primaryUrl: string;

  /** Secondary button title.  **/
  @Prop() secondaryTitle: string;

  /** Secondary button url.  **/
  @Prop() secondaryUrl: string;

  /** Use small button variant?  **/
  @Prop() isSmall = false;

  /** Emit event when primary button is clicked **/
  @Event({eventName: 'clickPrimary', bubbles: true}) clickPrimary: EventEmitter<MouseEvent>;

  /** Emit event when secondary button is clicked **/
  @Event({eventName: 'clickSecondary', bubbles: true}) clickSecondary: EventEmitter<MouseEvent>;

  /**
   * Primary button click handler.
   * @param e Event
   */
  onClickPrimaryButton(e: MouseEvent):void {
    this.clickPrimary.emit(e);
  }

  /**
   * Secondary button click handler.
   * @param e Event
   */
  onClickSecondaryButton(e: MouseEvent):void {
    this.clickSecondary.emit(e);
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <a href={this.secondaryUrl}
          class={'cta-secondary' + (this.isSmall ? ' small' : '')}
          onClick={(e) => this.onClickSecondaryButton(e)}>
          <arvest-button-secondary
            class={'cta-secondary-button' + (this.isSmall ? ' small' : '')}
            label={this.secondaryTitle}
            issmall={this.isSmall}
            tabIndex={-1}
          />
        </a>
        <a href={this.primaryUrl} onClick={(e) => this.onClickPrimaryButton(e)}>
          <arvest-button-primary
            label={this.primaryTitle}
            issmall={this.isSmall}
            tabIndex={-1}
          />
        </a>
      </Host>
    );
  }
}
