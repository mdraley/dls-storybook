import { FunctionalComponent } from '../../stencil-public-runtime';
import { TooltipCta, TooltipPosition, TooltipTrigger } from '../../global/ts/enums';
export declare class ArvestTooltip {
  /** Set the position of the tooltip.
   *  Options:  (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
   * **/
  position?: TooltipPosition;
  /** Show or hide the tooltip arrow.  **/
  arrow: boolean;
  /** Show or hide the tooltip arrow.  **/
  trigger?: TooltipTrigger;
  /**
   * Tooltip body copy/message (no limit)
   */
  message?: string;
  /** Type of CTA enabled?
   *  Options:  (text, button)
   * **/
  ctaType?: TooltipCta;
  /** CTA title
   * Options:  (button or text)
   * **/
  ctaTitle?: string;
  /** CTA full URL  **/
  ctaUrl?: string;
  show: boolean;
  handleKeyDown(ev: KeyboardEvent): void;
  private onHover;
  private onClick;
  private showMessage;
  private closeMessage;
  render(): FunctionalComponent;
}
