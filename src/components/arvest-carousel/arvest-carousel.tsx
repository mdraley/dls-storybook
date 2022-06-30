import { Component, Element, Host, State, h } from '@stencil/core';
import { SlideDirection } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-carousel',
  'styleUrl': 'arvest-carousel.css',
  'shadow': true
})

export class ArvestCarousel {

    children?: Element[];

    @Element() host?: HTMLDivElement;

    @State() slideDirection: SlideDirection;

    @State() activeIndex = 0;

    private handleNext = () => {
      this.activeIndex < this.children.length - 1
        ? this.activeIndex += 1
        : this.activeIndex = 0;
      this.slideDirection = SlideDirection.right;
    }

    private handlePrev = () => {
      this.activeIndex > 0
        ? this.activeIndex -= 1
        : this.activeIndex = this.children.length - 1;
      this.slideDirection = SlideDirection.left;
    }

    private handleGoToIndex = (index) => {
      this.activeIndex = index;
    }

    componentWillLoad () {
      this.children = Array.from(this.host.children);
      this.host.innerHTML = '';
    }

    render () {

      return (
        <Host>
          <div class="carousel slide ">
            <ol class="carousel-indicators">
              {
                this.children.map((child, index) => <li data-target={child} data-slide-to={index} onClick={() => this.handleGoToIndex(index)} class={`${index === this.activeIndex && 'active'}`}></li>)
              }
            </ol>
            <div class="carousel-inner">
              {
                this.children.map((child, index) => <div class={`carousel-item ${index === this.activeIndex && 'active'}`} innerHTML={child.outerHTML}></div>)
              }
              <a onClick={this.handlePrev} class="carousel-control-prev" href="#" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a onClick={this.handleNext} class="carousel-control-next" href="#" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" ></span>
              </a>
            </div>
          </div>
        </Host>
      );
    }
}
