import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestAlert {
  /**
   * Options for the Alert component
   * The types of available alerts are
   * default, alert, confirmation, caution and info.
   * The styles and icons are tied to that selection.
   * [Required]
   */
  type: string;
  /** Banner: passing this as true will display the alert as a banner at the top of the page */
  banner: boolean;
  /** Dismissed */
  dismissed: boolean;
  private setIcon;
  private dismissAlert;
  render(): FunctionalComponent;
}
