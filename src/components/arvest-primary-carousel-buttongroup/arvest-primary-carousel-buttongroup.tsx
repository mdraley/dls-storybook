import {
  Component,
  Host,
  Prop,
  h,
  State,
  Event,
  EventEmitter
} from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-primary-carousel-buttongroup',
  styleUrl: 'arvest-primary-carousel-buttongroup.css',
  shadow: true
})

export class ArvestPrimaryCarouselButtongroup {
  @Prop() slides: string;

  @Prop() slidePosition: number;

  @Prop() ismobile = false;

  @State() _slides: Array<any>;

  @State() selectedBtn = -1;

  @Event({ eventName: 'primaryCarouselBtnClicked' })
  btnClicked: EventEmitter<number>;

  private colorDefault = Color.grayscale06;

  private colorHover = Color.hover01;

  private arrayDataWatcher (slides) {
    if (typeof slides === 'string') {
      this._slides = JSON.parse(slides);
    } else {
      this._slides = slides;
    }
  }

  private setSelectedBtn = (index) => {
    this.selectedBtn = index;
  };

  private defaultSelectedBtn = () => {
    this.selectedBtn = -1;
  };

  componentWillLoad () {
    this.arrayDataWatcher(this.slides);
  }

  render () {
    return (
      <Host>
        <div class="btngroup-container">
          {this._slides.map((slide, index) => (
            this.ismobile ? (
              <div class={index < this._slides.length - 1 && 'btngroup-container--mobile-item'}>
                <arvest-primary-carousel-mobilebtns
                  isactive={this.slidePosition === index}
                />
              </div>
            ) : (
              <button
                onMouseEnter={() => this.setSelectedBtn(index)}
                onMouseLeave={this.defaultSelectedBtn}
                onClick={() => this.btnClicked.emit(index)}
                class={`btngroup-btn ${index < this._slides.length - 1 &&
                'btngroup-btn--rightdivider'
                }`}
              >
                <div class="btngroup-btn--wrapper">
                  <arvest-typography
                    variant={TypographyVariants.action}
                    color={
                      this.selectedBtn === index || this.slidePosition === index
                        ? this.colorHover
                        : this.colorDefault
                    }
                  >
                    {slide}
                  </arvest-typography>
                  {this.slidePosition === index && <div class="btngroup-btn--underline"></div>}
                </div>
              </button>
            )
          ))}
        </div>
      </Host>
    );
  }
}
