import {Component, Host, h, Prop, Element, Watch, Event, State, FunctionalComponent, EventEmitter} from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-searchbar',
  styleUrl: 'arvest-searchbar.css',
  shadow: true
})

export class ArvestSearchbar {
  @Element() el: HTMLElement;

  /**
   * Array of links as json string.
   */
  @Prop() links: string;

  @Watch('links')
  public linksHandler(newValue: string): void {
    this.links = newValue;
  }

  /* Enables special styles for the search on the Microsite Nav */
  @Prop() isMobile = false;

  @State() _links: Array<any>;

  @State() isTakeover = false;

  @State() isReverse = false;

  @State() isMouseOver = false;

  @State() showLinks = false;

  @State() searchValue: string;

  @State() isFocused = false;

  /**
   * Event emitted when the value entered into search changes. Contains search string.
   */
  @Event({
    cancelable: true,
    bubbles: true
  }) searchValueChange: EventEmitter<string>;

  componentWillLoad(): void {
    this.arrayDataWatcher(this.links);
  }

  private handleInputChange(event) {
    this.searchValue = event.target.value;
    this.searchValueChange.emit(event.target.value);
  }

  private handleBackKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.setTakeoverOff();
    }
    if (ev.key === 'Escape') {
      this.setTakeoverOff();
    }
  }

  private handleInputKeyDown(ev: KeyboardEvent): void {
    if (ev.key !== 'Tab' && !this.isTakeover) {
      this.setTakeoverOn();
    }
    if (ev.key === 'Escape') {
      this.setTakeoverOff();
    }
  }

  private arrayDataWatcher(links) {
    if (typeof links === 'string') {
      this._links = JSON.parse(links);
    } else {
      this._links = links;
    }
  }

  private setMouseOn = () => {
    this.isMouseOver = true;
  };

  private setMouseOff = () => {
    this.isMouseOver = false;
  };

  private setTakeoverOn = () => {
    this.isTakeover = true;
    this.showLinks = true;
    this.isFocused = true;
    if (this.isMobile) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100vh';
    }
  };

  private setTakeoverOff = () => {
    this.isTakeover = false;
    this.showLinks = false;
    this.isFocused = true;
    if (this.isMobile) {
      document.body.style.overflowY = '';
      document.body.style.height = '';
    }
    this.searchValue = null;
  };

  private setReverseStylesOn = () => {
    this.isReverse = true;
  };

  private setReverseStylesOff = () => {
    this.isReverse = false;
  };

  componentDidRender(): void {
    if (this.isFocused) {
      this.isFocused = false;
      this.el.shadowRoot.querySelector('input').focus();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          class={'wrapper' +
          `${this.isMobile ? ' mobile' : ''}` +
          `${this.isTakeover ? ' takeover' : ''}`
          }
        >
          {this.isMobile && this.isTakeover && (
            <div
              class="chevron"
              onClick={() => {
                this.setTakeoverOff();
              }}
              onKeyDown={(ev) => {
                this.handleBackKeyDown(ev);
              }}
            >
              <arvest-icon tabindex="0" icon="chevron-left-light"/>
            </div>
          )}
          <div
            class={'searchbar-container' +
            `${this.isReverse ? ' reverse' : ''}` +
            `${this.isMobile ? ' mobile' : ''}` +
            `${this.isTakeover ? ' takeover' : ''}`
            }
            onMouseEnter={() => {
              this.setReverseStylesOn();
              this.setMouseOn();
            }}
            onMouseLeave={() => {
              this.setMouseOff();
              if (!this.isTakeover && !this.isMouseOver) {
                this.setReverseStylesOff();
              }
            }}
          >
            <div class="searchbar-input-icon-wrapper">
              <input
                id="searchbar-input"
                name="searchbar-input"
                class="searchbar-input"
                type="text"
                placeholder="Ask Arvest"
                aria-label="Ask Arvest"
                value={this.searchValue}
                onClick={() => {
                  this.setTakeoverOn();
                }}
                onKeyDown={(ev) => {
                  this.handleInputKeyDown(ev);
                }}
                onInput={(event) => {
                  this.handleInputChange(event);
                }}
                onBlur={() => {
                  if (!this.isMouseOver) {
                    this.showLinks = false;
                  }
                }}
              />
              <a href="https://www.arvest.com/askarvest?typeId=0&q=" target="_blank">
                <arvest-icon
                  icon="questionCircleLight"
                  class={this.isReverse ? 'hidden' : ''}
                  style={{ filter: 'invert(1)' }}
                />
                <arvest-icon icon="questionCircleLightHover" class={this.isReverse ? '' : 'hidden'} />
              </a>
            </div>
            {this.showLinks &&
            <div
              class={'search-results' +
              `${this.isMobile ? ' mobile' : ''}` +
              `${this.isTakeover ? ' takeover' : ''}`
              }
            >
              <div class="searchbar-commonsearches--headline">
                <arvest-typography variant={TypographyVariants.body1}>
                  Common searches:
                </arvest-typography>
              </div>
              <div>
                {this._links.map((link) => (
                  <div class="searchbar-commonsearches--wrapper--hyperlinks">
                    <a
                      class="searchbar-commonsearches--hyperlinks"
                      href={link.href}
                    >
                      <arvest-typography
                        color={Color.secondary01}
                        variant={TypographyVariants.body1}
                      >
                        {link.label}
                      </arvest-typography>
                    </a>
                  </div>
                ))}
                <div class="searchbar--hyperlinks--wrapper">
                  <arvest-typography variant={TypographyVariants.body1}>
                    Need other info?{' '}
                    <a class="searchbar--hyperlinks" href="#">
                      Ask Arvest
                    </a>
                  </arvest-typography>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </Host>
    );
  }
}
