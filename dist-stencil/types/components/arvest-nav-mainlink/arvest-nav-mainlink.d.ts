import { FunctionalComponent } from '../../stencil-public-runtime';
import { Color } from '../../global/ts/enums';
export declare class ArvestNavMainlink {
  /** If true, change to active styles */
  isactive: boolean;
  /** If true, change font colors for light mode */
  islightmode: boolean;
  mobile: boolean;
  isunderline: boolean;
  color: Color;
  activeColor: Color;
  private setHover;
  private setDefault;
  componentWillLoad(): void;
  render(): FunctionalComponent;
}
