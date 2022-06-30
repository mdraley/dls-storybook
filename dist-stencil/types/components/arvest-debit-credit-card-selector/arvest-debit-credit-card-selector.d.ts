import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestDebitCreditCardSelector {
  /** Link CTA text */
  linkcta: string;
  /** Label text for card */
  label?: string;
  /** Button CTA text */
  selectButton?: string;
  /** Turn Link on/off */
  showLink?: boolean;
  /** Turn Label on/off */
  showLabel?: boolean;
  /** Turn Button on/off */
  showButton?: boolean;
  /** URL for background image */
  bgimage?: string;
  setBgimage(newValue: string): void;
  _bgimage?: string;
  componentWillLoad(): void;
  render(): FunctionalComponent;
}
