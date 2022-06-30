import { FunctionalComponent } from '../../stencil-public-runtime';
import { Color } from '../../global/ts/enums';
export declare class ArvestButtongroup {
  /** Change the color of the component using the Color enum */
  color?: Color;
  /** Aria Label for screen readers [Required] */
  ariaLabel: string;
  render(): FunctionalComponent;
}
