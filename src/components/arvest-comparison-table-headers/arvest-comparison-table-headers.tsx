import {
  Component,
  Host,
  h,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter, FunctionalComponent
} from '@stencil/core';
import { Color, ViewportBreakpoints } from '../../global/ts/enums';
import PhoneCreditcard from './phone-creditcard.svg';

@Component({
  tag: 'arvest-comparison-table-headers',
  styleUrl: 'arvest-comparison-table-headers.css',
  shadow: true
})
export class ArvestComparisonTableHeaders {
  @Prop() headers: Array<any>;

  @State() viewport = window.innerWidth;

  @State() slidePosition = 0;

  @State() touchStartPos = 0;

  @State() touchEndPos = 0;

  @State() ismobile = this.viewport < ViewportBreakpoints.tablet;

  @Event({ eventName: 'slidermoved' })
  sliderMoved: EventEmitter<number>;

  @Listen(
    'resize',
    { target: 'window',
      capture: true }
  )
  calcViewport(): void {
    this.viewport = window.innerWidth;
  }

  @Listen('slidermoved')
  renderSingleColum(index: CustomEvent): void {
    this.slidePosition = index.detail;
  }

  private touchStartHandler = (event) => {
    this.touchStartPos = event.touches[0].screenX;
  };

  private touchMoveHandler = (event) => {
    this.touchEndPos = event.touches[0].screenX;
  };

  private moveSlideToRight = () => {
    if (this.slidePosition < this.headers.length - 1) {
      this.slidePosition += 1;
    }
  };

  private moveSlideToLeft = () => {
    if (this.slidePosition > 0) {
      this.slidePosition -= 1;
    }
  };

  private touchEndHandler = () => {
    const direction = this.touchEndPos - this.touchStartPos;
    if (direction < 0) {
      this.moveSlideToRight();
    } else {
      this.moveSlideToLeft();
    }
    this.sliderMoved.emit(this.slidePosition);
  };

  private renderCards = () => this.headers.map((header, index) => <arvest-comparison-table-headercard
    style={
      this.ismobile &&
          index !== this.slidePosition && { opacity: '0.3',
        transition: '0.3s' }
    }
    cardTitle={header.cardTitle}
    description={header.description}
    cta={header.cta}
    hascolor={index % 2 < 1}
  />);

  private renderSliderDots = () => this.headers.map((header, index) => <div
    id={`${header}-${index}`}
    class={index < this.headers.length - 1 && 'dots-item'}
  >
    <arvest-primary-carousel-mobilebtns
      isactive={this.slidePosition === index}
      color={Color.grayscale04}
    />
  </div>);

  private calcTranslation = (num) => 60 * -num;

  componentWillRender(): void {
    this.viewport = window.innerWidth;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          onDragStart={(e) => e.preventDefault()}
          onTouchStart={this.touchStartHandler}
          onTouchMove={this.touchMoveHandler}
          onTouchEnd={this.touchEndHandler}
          class="cards-row"
          style={
            this.ismobile
              ? {
                transform: `translateX(calc(${this.calcTranslation(this.slidePosition)}vw - ${this.slidePosition * 16}px))`,
                transition: '0.3s ease-in-out'
              }
              : {
                transform: 'translateX(0%)',
                transition: '0.3s ease-in-out'
              }
          }
        >
          <div class="icon card-container">
            <img alt="" src={PhoneCreditcard} />
          </div>
          {this.renderCards()}
        </div>
        <div class="dots-container">
          {this.ismobile && this.renderSliderDots()}
        </div>
      </Host>
    );
  }
}
