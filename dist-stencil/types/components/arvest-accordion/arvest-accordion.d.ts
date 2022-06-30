import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestAccordion {
  /** Accordion title */
  accordiontitle: string;
  /** Accordion type.
   *  Options are 'content', 'table-simple', 'nav', and 'mobileNav'
   */
  type: string;
  /** Array of row titles */
  rowtitles?: Array<any>;
  /** 2D Array of columns and cells */
  cols?: Array<Array<any>>;
  activeCol: number;
  isopen: boolean;
  viewport: number;
  ismobile: boolean;
  handleKeyDown(ev: KeyboardEvent): void;
  calcViewport(): void;
  private handleToggle;
  private renderRowTitles;
  private renderGridTable;
  private renderMobileGridTable;
  private getTitleStyle;
  private getSentenceCase;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
