import { FunctionalComponent } from '../../stencil-public-runtime';
import { TypographyVariants, Color } from '../../global/ts/enums';
export declare class ArvestTypography {
  /** Typography styles */
  variant: TypographyVariants;
  /** Font Color */
  color: Color;
  viewport: number;
  calcViewport(): void;
  private getDeviceStyles;
  private getStyles;
  handleRender(): FunctionalComponent;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
