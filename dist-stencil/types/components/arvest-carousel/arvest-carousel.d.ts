import { SlideDirection } from '../../global/ts/enums';
export declare class ArvestCarousel {
  children?: Element[];
  host?: HTMLDivElement;
  slideDirection: SlideDirection;
  activeIndex: number;
  private handleNext;
  private handlePrev;
  private handleGoToIndex;
  componentWillLoad(): void;
  render(): any;
}
