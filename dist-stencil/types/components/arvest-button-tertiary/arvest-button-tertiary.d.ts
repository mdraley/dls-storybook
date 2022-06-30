import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonType, Color } from '../../global/ts/enums';
export declare class ArvestButtonTertiary {
  /** Text inside the button. Must not be more than 30 characters [Required] */
  label: string;
  /** Change the type of the component using the ButtonType enum */
  type?: ButtonType;
  /** If true, disable mouse events */
  disabled?: boolean;
  _label?: string;
  color: Color;
  private labelsize;
  private getStyles;
  private setDefaultColot;
  private setHoverColor;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
