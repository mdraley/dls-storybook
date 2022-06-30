import { FunctionalComponent } from '../../stencil-public-runtime';
import { Color } from '../../global/ts/enums';
import { INav } from '../../global/ts/interfaces';
export declare class ArvestNavMainMenu {
  el: HTMLElement;
  /** Active tab with underline style */
  activeIndex: number;
  setActiveIndex(newValue: string): void;
  /** If true, change font colors for light mode */
  isLightMode: boolean;
  setIsLightMode(newValue: string): void;
  navType: string;
  /** Navigation data array  **/
  navData: string | INav;
  _navData: INav;
  showMobileSubNav: boolean;
  isUnderline: boolean;
  color: Color;
  activeColor: Color;
  isMobile: boolean;
  handleResize(e: UIEvent): void;
  handleshowMobileNavMain(e: CustomEvent<boolean>): void;
  handleshowMobileNav(e: CustomEvent<boolean>): void;
  componentWillLoad(): void;
  private onHover;
  private onLeave;
  private parseNavDataArray;
  private displayDesktopSubMenu;
  private displayMobileSubMenuItem;
  render(): FunctionalComponent;
}
