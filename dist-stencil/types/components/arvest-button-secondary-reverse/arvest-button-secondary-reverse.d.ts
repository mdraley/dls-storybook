import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonType, Color } from '../../global/ts/enums';
export declare class ArvestButtonSecondaryReverse {
  /** Text inside the button [Required] */
  label: string;
  /** Change the type of the component using the ButtonType enum */
  type?: ButtonType;
  /** If true, disable mouse events */
  disabled?: boolean;
  /** If true, spinner for loading */
  isloading?: boolean;
  /** If true, button size will be smaller*/
  issmall?: boolean;
  _label?: string;
  color: Color;
  isactive: boolean;
  private labelsize;
  private getStyles;
  private setActive;
  private setNotActive;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
