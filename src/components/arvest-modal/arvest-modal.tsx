import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { TypographyVariants } from '../../global/ts/enums';
@Component({
  tag: 'arvest-modal',
  styleUrl: 'arvest-modal.css',
  shadow: true
})
export class ArvestModal {
  /** Title at the top of the modal  **/
  @Prop() heading: string;

  /** Modal size (small, large) **/
  @Prop() size: string;

  /**
   * Event emitted when the close button on the modal is clicked.
   */
  @Event({eventName: 'clickClose', bubbles: true}) clickClose: EventEmitter<MouseEvent>;

  onClickCloseHandler(e: MouseEvent):void {
    this.clickClose.emit(e);
  }

  render():string {
    return (
      <Host>
        <section class={`modal modal--${this.size}`} role="dialog" aria-labelledby="id" aria-modal="true">
          <header class="modal__header">
            <arvest-typography class="modal__title" variant={TypographyVariants.h4}>
              {this.heading}
            </arvest-typography>
            <arvest-close-button class="modal__closeButton" onClick={(e) => this.onClickCloseHandler(e)}></arvest-close-button>
          </header>
          <div class="modal__body">
            <slot></slot>
          </div>
        </section>
      </Host>
    );
  }
}
