import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestCard4ColTextImage {
  /** Main headline for the component */
  mainheadline?: string;
  /** Card one image URL [Required] */
  imageone: string;
  /** Card one image alt text [Required] */
  altone: string;
  /** Card one title [Required] */
  titleone: string;
  /** Card one body text [Required] */
  bodyone: string;
  /** Card one link URL */
  linkone?: string;
  /** Card two image URL [Required] */
  imagetwo: string;
  /** Card two image alt text [Required] */
  alttwo: string;
  /** Card two title [Required] */
  titletwo: string;
  /** Card two body text [Required] */
  bodytwo: string;
  /** Card two link URL */
  linktwo?: string;
  /** Card three image URL [Required] */
  imagethree: string;
  /** Card three image alt text [Required] */
  altthree: string;
  /** Card three title [Required] */
  titlethree: string;
  /** Card three body text [Required] */
  bodythree: string;
  /** Card three link URL */
  linkthree?: string;
  /** Label for the CTA */
  ctalabel?: string;
  /** CTA Link */
  ctalink?: string;
  private cardClick;
  render(): FunctionalComponent;
}
