export interface INav {
  navigation: INavPrimary[];
}
export interface INavPrimary {
  name: string;
  href: string;
  subNav: INavSection[];
}
export interface INavSection {
  section: INavSectionItems[];
}
export interface INavSectionItems {
  type: string;
  name?: string;
  href?: string;
  isNew?: boolean;
  adMessage?: string;
  adBgColor?: string;
  adBgImage?: string;
  adCtaTitle?: string;
  adCtaUrl?: string;
}
export interface IFormDropdownOption {
  label: string;
  value: string;
  selected?: boolean;
}
export interface IGeocoderAddressComponent {
  'long_name': string;
  'short_name': string;
  types: Array<string>;
}
