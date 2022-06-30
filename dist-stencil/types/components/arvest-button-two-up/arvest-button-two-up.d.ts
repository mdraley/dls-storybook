import { FunctionalComponent, EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestButtonTwoUp {
  /** Primary button title.  **/
  primaryTitle: string;
  /** Primary button url.  **/
  primaryUrl: string;
  /** Secondary button title.  **/
  secondaryTitle: string;
  /** Secondary button url.  **/
  secondaryUrl: string;
  /** Use small button variant?  **/
  isSmall: boolean;
  /** Emit event when primary button is clicked **/
  clickPrimary: EventEmitter<MouseEvent>;
  /** Emit event when secondary button is clicked **/
  clickSecondary: EventEmitter<MouseEvent>;
  /**
   * Primary button click handler.
   * @param e Event
   */
  onClickPrimaryButton(e: MouseEvent): void;
  /**
   * Secondary button click handler.
   * @param e Event
   */
  onClickSecondaryButton(e: MouseEvent): void;
  render(): FunctionalComponent;
}
