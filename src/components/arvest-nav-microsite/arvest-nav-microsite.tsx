import {Component, Event, EventEmitter, FunctionalComponent, h, Host, Listen, Prop, State, Watch} from '@stencil/core';
import {Color, LogoColor, TypographyVariants, ViewportBreakpoints} from '../../global/ts/enums';
import {INav} from '../../global/ts/interfaces';
import * as navData from './navigation-list.json';

@Component({
  tag: 'arvest-nav-microsite',
  styleUrl: 'arvest-nav-microsite.css',
  shadow: true
})

export class ArvestNavMicrosite {
  /** Active tab that has the underline */
  @Prop() activeindex = 0;

  /** Frequently asked questions for searchbar */
  @Prop() searchbarlinks = `[
    {"label":"Find my routing number", "href":"https://arvest.com"},
    {"label":"Apply for a loan", "href":"https://arvest.com"},
    {"label":"Open an account", "href":"https://arvest.com"},
    {"label":"Order / reorder checks", "href":"https://arvest.com"}
  ]`;

  /** Navigation data array  **/
  @Prop({mutable: true}) navData: INav = navData;

  @Watch('navData')
  setNavData (newValue: string): void {
    this.navData = JSON.parse(newValue);
  }

  @State() showSubNav = false;

  @State() isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;

  @Listen(
    'resize',
    {
      target: 'window',
      capture: true
    }
  )
  handleResize(e: UIEvent): void {
    const window = e.target as Window;
    this.isMobile = window.innerWidth < ViewportBreakpoints.desktopSmall;
  }

  @Event() showMobileNavMicrosite: EventEmitter<boolean>;

  private toggleShowSubNav = () => {
    this.showSubNav = !this.showSubNav;
    if (this.isMobile) {
      this.showMobileNavMicrosite.emit(this.showSubNav);
    }
  };

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="nav-container">
          <div class="top-row">
            <div class="logo">
              <arvest-logo variant={LogoColor.blue} />
            </div>
            {!this.isMobile && (
              <nav aria-label="Top Navigation">
                <ul role="menubar">
                  <li class="top-row-menu-item" role="menuitem">
                    <a href="#"> { /* TODO Link */}
                      <arvest-icon icon="bookmarkRegular"/>
                      <arvest-typography
                        variant={TypographyVariants.navigation}
                        color={Color.black}>
                        About
                      </arvest-typography>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="top-row-menu-item" role="menuitem">
                    <a href="#"> { /* TODO Link */}
                      <arvest-icon icon="phoneAltRegular"/>
                      <arvest-typography
                        variant={TypographyVariants.navigation}
                        color={Color.black}>
                        Call toll free (866) 952-9523
                      </arvest-typography>
                    </a>
                  </li>
                </ul>
              </nav>
            )}
            {this.isMobile && (
              <nav class="mobile" aria-label="Top Navigation">
                <ul role="menubar">
                  <li class="top-row-menu-item" role="menuitem">
                    <a href="#"> { /* TODO Link */}
                      <arvest-typography
                        variant={TypographyVariants.navigation}
                        color={Color.black}>
                        Log in
                      </arvest-typography>
                    </a>
                  </li>
                </ul>
                <button
                  aria-label="Toggle Mobile Sub Navigation"
                  onClick={this.toggleShowSubNav}
                  class="hamburger">
                  <arvest-icon icon="menu" class={this.showSubNav ? 'hidden' : ''} />
                  <arvest-icon icon="timesLight" class={this.showSubNav ? 'close' : 'hidden'} />
                </button>
              </nav>
            )}
          </div>
          <div class={'bottom-row' + (this.isMobile ? ' mobile' : '')}>
            {this.isMobile && this.showSubNav && (
              <div class="search">
                <arvest-searchbar isMobile={true} links={this.searchbarlinks}/>
              </div>
            )}
            <nav aria-label="Main Navigation">
              <div>
                <arvest-nav-main-menu
                  activeIndex={this.activeindex}
                  isLightMode={false}
                  navData={this.navData}
                  navType={'micro'}
                />
              </div>
            </nav>
          </div>
        </div>
        {this.isMobile && this.showSubNav && (<div class="overlay" onClick={this.toggleShowSubNav} />)}
      </Host>
    );
  }
}
