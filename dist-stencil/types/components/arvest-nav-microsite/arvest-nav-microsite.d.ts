import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
import { INav } from '../../global/ts/interfaces';
export declare class ArvestNavMicrosite {
  /** Active tab that has the underline */
  activeindex: number;
  /** Frequently asked questions for searchbar */
  searchbarlinks: string;
  /** Navigation data array  **/
  navData: INav;
  setNavData(newValue: string): void;
  showSubNav: boolean;
  isMobile: boolean;
  handleResize(e: UIEvent): void;
  showMobileNavMicrosite: EventEmitter<boolean>;
  private toggleShowSubNav;
  render(): FunctionalComponent;
}
