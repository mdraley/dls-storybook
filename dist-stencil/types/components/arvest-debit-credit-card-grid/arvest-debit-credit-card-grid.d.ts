import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestDebitCreditCardGrid {
  /** Data Array to render Cards with. */
  cardData: Array<any>;
  /** Sets Parsed Data Array to State */
  _cardData: Array<any>;
  /** Used to toggle between grid views */
  showSmallGrid: boolean;
  viewport: number;
  isMobile: boolean;
  /** Used to select which sorted array to display */
  selectSort: string;
  showDropdown: boolean;
  calcViewport(): void;
  handleKeyDown(ev: KeyboardEvent): void;
  arrayDataWatcher(cardData: any): void;
  handleSelectSort(selection: string): void;
  private handleToggle;
  private toggleDropdown;
  private getSort;
  private render2UpView;
  private render4UpView;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
