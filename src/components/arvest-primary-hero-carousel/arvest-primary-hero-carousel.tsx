import { Component, Host, h, Prop, Listen, State } from '@stencil/core';
import { TypographyVariants, Color, ViewportBreakpoints } from '../../global/ts/enums';

@Component({
  tag: 'arvest-primary-hero-carousel',
  styleUrl: 'arvest-primary-hero-carousel.css',
  shadow: true
})

export class ArvestPrimaryHeroCarousel {

  @Prop() slides: string;

  @State() _slides: Array<any> = ['https://www.arvest.com/images/dls/2000x900/1.jpg', 'https://www.arvest.com/images/dls/2000x900/2.jpg', 'https://www.arvest.com/images/dls/2000x900/3.jpg', 'https://www.arvest.com/images/dls/2000x900/4.jpg',];

  @State() viewport: number;

  @State() slidePosition = 0;

  @State() touchStartPos = 0;

  @State() touchEndPos = 0;

  @State() headline = 'Lorem ipsum';

  @Listen(
    'resize',
    {
      target: 'window',
      capture: true
    }
  )
  calcViewport() {
    this.viewport = window.innerWidth;
  }

  @Listen('primaryCarouselBtnClicked')
  btnClickedHandler(index: CustomEvent) {
    this.slidePosition = index.detail;
  }

  // eslint-disable-next-line consistent-return
  private calcTypeVariant = (headline) => {
    const charNums = headline.length;
    if (charNums <= 30) {
      return TypographyVariants.h1;
    } else if (charNums > 30 && charNums <= 60) {
      return TypographyVariants.h2;
    } else if (charNums > 60) {
      return TypographyVariants.h3;
    }
  };

  private arrayDataWatcher(slides) {
    if (typeof slides === 'string') {
      this._slides = JSON.parse(slides);
    } else {
      this._slides = slides;
    }
  }

  private touchStartHandler = (event) => {
    this.touchStartPos = event.touches[0].screenX;
  };

  private touchMoveHandler = (event) => {
    this.touchEndPos = event.touches[0].screenX;
  };

  private moveSlideToRight = () => {
    if (this.slidePosition < this._slides.length - 1) {
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
  };

  private renderSlides() {
    return (
      <div
        onDragStart={(e) => e.preventDefault()}
        onTouchStart={this.touchStartHandler}
        onTouchMove={this.touchMoveHandler}
        onTouchEnd={this.touchEndHandler}
        class="responsive-image-container"
      >
        {this._slides.map((slide) => <div
          style={{
            transform: `translateX(-${this.slidePosition}00%)`,
            transition: '0.3s ease-in-out'
          }}
        >
          <arvest-responsive-image
            src={slide.src}
            alt={this.headline}
          ></arvest-responsive-image>
        </div>)}
      </div>
    );
  }

  componentWillRender() {
    this.viewport = window.innerWidth;
    this.arrayDataWatcher(this.slides);
    if (this.headline.length > 80) {
      this.headline = this.headline.slice(
        0,
        80
      );
    }
    this.headline = this._slides[this.slidePosition].headline;
  }

  render() {
    return (
      <Host>
        <div class="container">
          {this.renderSlides()}
          <div class="content-container">
            <div class="content-container--grid">
              <div class="content-container--headline">
                <arvest-typography
                  variant={this.calcTypeVariant(this.headline)}
                  color={
                    this.viewport <= ViewportBreakpoints.primaryHeroBreakpoint
                      ? Color.black
                      : Color.white
                  }
                >
                  {this.headline}
                </arvest-typography>
              </div>
              <div class="content-container--button">
                <arvest-button-primary label="Button"></arvest-button-primary>
              </div>
            </div>
          </div>

          <nav class="responsive-image-btngroup-container">
            <arvest-primary-carousel-buttongroup
              slides='["Credit Card", "Cool Blue Savings", "Business Loans", "Zelle"]'
              ismobile={this.viewport <= ViewportBreakpoints.primaryHeroBreakpoint}
              slidePosition={this.slidePosition}
            ></arvest-primary-carousel-buttongroup>
          </nav>
        </div>
      </Host>
    );
  }
}
