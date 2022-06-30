import { FunctionalComponent, EventEmitter } from '../../stencil-public-runtime';
import { INav } from '../../global/ts/interfaces';
export declare class ArvestNav {
  activeindex: number;
  searchbarlinks: string;
  /** Navigation data array  **/
  navData: INav;
  setNavData(newValue: string): void;
  showSubNav: boolean;
  isMobile: boolean;
  handleResize(e: UIEvent): void;
  showMobileNavMain: EventEmitter<boolean>;
  private toggleShowSubNav;
  render(): FunctionalComponent;
}
