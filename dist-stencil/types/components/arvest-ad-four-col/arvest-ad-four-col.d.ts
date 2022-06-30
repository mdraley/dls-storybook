import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestAdFourCol {
  defaultbg: string;
  /** Change the background color. Color options: cobalt, ocean, navy. Default is cobalt. */
  color?: string;
  /** Optional sizes are small and large */
  size?: string;
  /** Turn the CTA on/off */
  showcta?: boolean;
  /** CTA / Button text */
  ctatitle?: string;
  /** CTA / Button URL */
  url?: string;
  /** Change the background image using bgimage and a full URL as a string. Example: <arvest-ad-four-col bgimage="https://www.arvest.com/someimage.jpg">  The default background is a geometric pattern. */
  bgimage?: string;
  /** Change the opacity of the background image. Use a decimal between 0-1. Default value is 0.5 (50%). [optional] */
  opacity?: string;
  render(): FunctionalComponent;
}
