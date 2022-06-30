import {Component, Host, h, Prop, FunctionalComponent, State, Listen, Event, EventEmitter, Watch} from '@stencil/core';
import {
  LogoColor,
  Color,
  TypographyVariants, ViewportBreakpoints
} from '../../global/ts/enums';
import * as navData from './navigation-list.json';
import {INav} from '../../global/ts/interfaces';

@Component({
  tag: 'arvest-nav',
  styleUrl: 'arvest-nav.css',
  shadow: true
})

export class ArvestNav {
  @Prop() activeindex = 0;

  @Prop() searchbarlinks: string;

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

  @Event() showMobileNavMain: EventEmitter<boolean>;

  private toggleShowSubNav = () => {
    this.showSubNav = !this.showSubNav;
    if (this.isMobile) {
      this.showMobileNavMain.emit(this.showSubNav);
    }
  };

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="nav-container">
          <div class="top-row">
            <div class="logo">
              <arvest-logo variant={LogoColor.white} />
            </div>
            <nav aria-label="Top Navigation">
              <ul role="menubar">
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="percentageRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        Rates
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="checkCircleRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        Survey
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="bookmarkRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        About
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="suitcaseRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        Careers
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="commentAltRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        Contact
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-icon icon="mapMarkerRegular" />
                    <arvest-typography
                      variant={TypographyVariants.navigation}
                      color={Color.white}
                    >
                        ATMs/Branches
                    </arvest-typography>
                  </a>
                </li>
                <li class="top-row-menu-item" role="menuitem">
                  <a href="#">
                    <arvest-button-secondary-reverse
                      label="Button"
                      issmall
                    />
                  </a>
                </li>
              </ul>
            </nav>
            {this.isMobile && (
              <nav class="mobile" aria-label="Top Navigation">
                <ul role="menubar">
                  <li class="top-row-menu-item" role="menuitem">
                    <a href="#">
                      <arvest-icon icon="checkCircleRegular" />
                      <arvest-typography
                        variant={TypographyVariants.navigation}
                        color={Color.white}
                      >
                        Nav Item
                      </arvest-typography>
                    </a>
                  </li>
                </ul>
                <button
                  aria-label="Toggle Mobile Sub Navigation"
                  onClick={this.toggleShowSubNav}
                  class="hamburger">
                  <arvest-icon icon="menu" class={this.showSubNav ? 'hidden' : ''}/>
                  <arvest-icon icon="timesLight" class={this.showSubNav ? '' : 'hidden'}/>
                </button>
              </nav>
            )}
          </div>
          <div class={'bottom-row' + (this.isMobile ? ' mobile' : '')}>
            {((this.isMobile && this.showSubNav) || !this.isMobile) && (
              <div class="search">
                <arvest-searchbar isMobile={this.isMobile} links={this.searchbarlinks}/>
              </div>
            )}
            <nav aria-label="Main Navigation">
              <arvest-nav-main-menu
                activeIndex={this.activeindex}
                isLightMode={false}
                navData={this.navData}
                navType={'main'}
              />
            </nav>
          </div>
        </div>
        {this.isMobile && this.showSubNav && (<div class="overlay" onClick={this.toggleShowSubNav} />)}
      </Host>
    );
  }
}
