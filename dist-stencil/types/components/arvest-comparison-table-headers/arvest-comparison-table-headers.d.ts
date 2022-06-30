import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestComparisonTableHeaders {
  headers: Array<any>;
  viewport: number;
  slidePosition: number;
  touchStartPos: number;
  touchEndPos: number;
  ismobile: boolean;
  sliderMoved: EventEmitter<number>;
  calcViewport(): void;
  renderSingleColum(index: CustomEvent): void;
  private touchStartHandler;
  private touchMoveHandler;
  private moveSlideToRight;
  private moveSlideToLeft;
  private touchEndHandler;
  private renderCards;
  private renderSliderDots;
  private calcTranslation;
  componentWillRender(): void;
  render(): FunctionalComponent;
}
