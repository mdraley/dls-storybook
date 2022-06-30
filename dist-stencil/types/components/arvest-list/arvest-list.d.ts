import { Color } from '../../global/ts/enums';
export declare class ArvestList {
  /** Index number for active element */
  activetag?: string;
  /** Index number for disabled element */
  disabledtag?: string;
  /** Color for all elements */
  color?: Color;
  children?: Element[];
  host?: HTMLDivElement;
  componentWillLoad(): void;
  render(): any;
}
