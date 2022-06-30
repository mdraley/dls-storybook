import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonType, Color } from '../../global/ts/enums';
export declare class ArvestButtonSecondary {
  /** Text inside the button. Must not be more than 25 characters. [Required] */
  label: string;
  /** Change the type of the component using the ButtonType enum */
  type?: ButtonType;
  /** If true, disable mouse events */
  disabled?: boolean;
  /** If true, spinner for loading */
  isloading?: boolean;
  /** If true, button size will be smaller*/
  issmall?: boolean;
  /** If true, button will use ad style */
  isad?: boolean;
  /** Custom button width */
  width?: number;
  _label?: string;
  color: Color;
  private labelsize;
  private getStyles;
  private getButtonStyle;
  private setSecondaryColor;
  private setHoverColor;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
