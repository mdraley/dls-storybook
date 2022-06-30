import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestForm {
  el: HTMLElement;
  inline: boolean;
  buttonText: string;
  /**
   * Submit URL for action attribute.
   * */
  action?: string;
  /**
   * Method for action prop ex. "get" or "post".
   * */
  method?: string;
  _value?: string;
  /**
   * Form submit event.
   */
  formSubmit: EventEmitter;
  /**
   * Listens to textChange event emitted from arvest-form-textinput component.
   * Then sets value of event to state.
   */
  handleChildrenText(e: any): void;
  /**
   * Handles form submit event.
   * */
  handleFormSubmit(): void;
  render(): any;
}
