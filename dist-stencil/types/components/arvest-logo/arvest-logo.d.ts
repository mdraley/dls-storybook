import { LogoColor } from '../../global/ts/enums';
export declare class ArvestLogo {
  /**
   * Pass in a variant to change the logo color. Options are white = "white",
   *black = "black", and blue = "blue". This is not required. The default is white.
   */
  variant: LogoColor;
  /** Pass in a url as a string for a redirect. This is optional. */
  url: string;
  currentLogo: string;
  private getLogo;
  render(): any;
}
