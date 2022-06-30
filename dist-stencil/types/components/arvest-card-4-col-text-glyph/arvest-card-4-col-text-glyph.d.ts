import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestCard4ColTextGlyph {
  /** Main headline for the component */
  mainheadline?: string;
  /** Card one glyph alt text [Required] */
  altone: string;
  /** Card one title [Required] */
  titleone: string;
  /** Card one body text [Required] */
  bodyone: string;
  /** Card one link URL */
  linkone?: string;
  /** Card two glyph alt text [Required] */
  alttwo: string;
  /** Card two title [Required] */
  titletwo: string;
  /** Card two body text [Required] */
  bodytwo: string;
  /** Card two link URL */
  linktwo?: string;
  /** Card three glyph alt text [Required] */
  altthree: string;
  /** Card three title [Required] */
  titlethree: string;
  /** Card three body text [Required] */
  bodythree: string;
  /** Card three link URL */
  linkthree?: string;
  private cardClick;
  render(): FunctionalComponent;
}
