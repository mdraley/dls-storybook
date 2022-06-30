import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestCardFullwidthProductFeatures {
  el: HTMLElement;
  /** ID component */
  identifier: string;
  /** Main title for the component */
  cardTitle: string;
  /** Description text */
  description: string;
  /** Optional list dscription text */
  listDescription?: string;
  /** List items to be displayed (pipe separated, no spaces) */
  listItems: string;
  /** Icon names to be displayed (pipe separated, no spaces) */
  icons: string;
  /** Icon links, in same order as icons (pipe separated, no spaces) */
  iconTips: string;
  /** Primary CTA title */
  primaryCtaTitle?: string;
  /** Primary CTA URL */
  primaryCtaUrl?: string;
  /** Secondary CTA title */
  secondaryCtaTitle?: string;
  /** Secondary CTA URL */
  secondaryCtaUrl?: string;
  _description: string;
  _listItems: string[];
  _icons: string[];
  _iconTips: string[];
  isMobile: boolean;
  handleResize(e: UIEvent): void;
  private handleLegendOpen;
  private handleLegendClose;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
