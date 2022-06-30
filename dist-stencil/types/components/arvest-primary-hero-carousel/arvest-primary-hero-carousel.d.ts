export declare class ArvestPrimaryHeroCarousel {
  slides: string;
  _slides: Array<any>;
  viewport: number;
  slidePosition: number;
  touchStartPos: number;
  touchEndPos: number;
  headline: string;
  calcViewport(): void;
  btnClickedHandler(index: CustomEvent): void;
  private calcTypeVariant;
  private arrayDataWatcher;
  private touchStartHandler;
  private touchMoveHandler;
  private moveSlideToRight;
  private moveSlideToLeft;
  private touchEndHandler;
  private renderSlides;
  componentWillRender(): void;
  render(): any;
}
