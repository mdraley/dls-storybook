import { Component, Host, Prop, h, Event, EventEmitter, State, Listen, Element } from '@stencil/core';
import { ButtonType, Color } from '../../global/ts/enums';

@Component({
  tag: 'arvest-form',
  styleUrl: 'arvest-form.css',
  shadow: true
})
export class ArvestForm {
  @Element() el: HTMLElement;

  @Prop() inline: boolean;

  @Prop() buttonText: string = 'Submit';

  /** 
   * Submit URL for action attribute. 
   * */
  @Prop() action?: string;

  /** 
   * Method for action prop ex. "get" or "post". 
   * */
  @Prop() method?: string;

  @State() _value?: string;

  /** 
   * Form submit event.
   */
  @Event({
    bubbles: true
  }) formSubmit: EventEmitter;

  /** 
   * Listens to textChange event emitted from arvest-form-textinput component.
   * Then sets value of event to state.
   */
  @Listen('textChange')
  handleChildrenText(e) {
    this._value = e.detail; 
  }

  /** 
   * Handles form submit event. 
   * */
  handleFormSubmit() {
    this.formSubmit.emit(this._value);
  }

  render () {
    return (
      <Host>
        <form class={`${this.inline ? 'form-inline' : ''}`} action={this.action} method={this.method}>
            <slot></slot>
          <arvest-button-primary
            type={ButtonType.submit}
            color={Color.primary01}
            issmall
            label={this.buttonText}
            onClick={() => this.handleFormSubmit()}
          ></arvest-button-primary>
        </form>
      </Host>
    );
  }
}
