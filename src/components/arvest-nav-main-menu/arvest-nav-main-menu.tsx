import {Component, Host, h, State, Prop, FunctionalComponent, Element, Watch, Listen} from '@stencil/core';
import {BadgeColor, Color, TypographyVariants, SubNavTypes, ViewportBreakpoints} from '../../global/ts/enums';
import { INav } from '../../global/ts/interfaces';

@Component({
  tag: 'arvest-nav-main-menu',
  styleUrl: 'arvest-nav-main-menu.css',
  shadow: true
})

export class ArvestNavMainMenu {
  @Element() el: HTMLElement;

  /** Active tab with underline style */
  @Prop({mutable: true}) activeIndex = 0;

  @Watch('activeIndex')
  setActiveIndex (newValue: string): void {
    this.activeIndex = Number(newValue);
  }

  /** If true, change font colors for light mode */
  @Prop({mutable: true}) isLightMode = false;

  @Watch('isLightMode')
  setIsLightMode (newValue: string): void {
    this.isLightMode = (newValue === 'true');
  }

  @Prop() navType: string;

  /** Navigation data array  **/
  @Prop() navData: string | INav;

  @State() _navData: INav;

  @State() showMobileSubNav = false;

  @State() isUnderline = false;

  @State() color: Color;

  @State() activeColor: Color;

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

  @Listen(
    'showMobileNavMain',
    {
      target: 'window',
      capture: true
    }
  )
  handleshowMobileNavMain(e: CustomEvent<boolean>): void {
    if (this.navType === 'main') {
      this.showMobileSubNav = e.detail;
    }
  }

  @Listen(
    'showMobileNavMicrosite',
    {
      target: 'window',
      capture: true
    }
  )
  handleshowMobileNav(e: CustomEvent<boolean>): void {
    if (this.navType === 'micro') {
      this.showMobileSubNav = e.detail;
    }
  }

  componentWillLoad (): void {
    if (this.navType === 'main') {
      this.isLightMode = true;
    }
    this.color = this.isLightMode ? Color.black : Color.white;
    this.activeColor = this.isLightMode ? Color.black : Color.white;
    this.parseNavDataArray(this.navData);
  }

  private onHover = () => {
    this.color = this.isLightMode ? Color.black : Color.white;
  };

  private onLeave = () => {
    this.color = this.isLightMode ? Color.black : Color.white;
  };

  private parseNavDataArray(data: string | INav): void {
    if (typeof data === 'string') {
      this._navData = JSON.parse(data);
    }
    this._navData = data as INav;
  }

  private displayDesktopSubMenu = (subNav) => {
    return subNav.map((item) => {
      return (<li class={'section' + ((item.section.length > 6) ? ' double' : '') + ((item.section[0].type === SubNavTypes.ad) ? ' double ad-section' : '')}><ul>
        { item.section.map((section) => {
          if (section.type.valueOf() === SubNavTypes.ad) {
            return (
              <li class={'ad double'}>
                <arvest-ad-four-col
                  color={section.adBgColor ? section.adBgColor : ''}
                  size={'large'}
                  showcta={!!section.adCtaTitle}
                  ctatitle={section.adCtaTitle ? section.adCtaTitle : ''}
                  url={section.adCtaUrl ? section.adCtaUrl : ''}
                >
                  {section.adMessage}
                </arvest-ad-four-col>
              </li>
            );
          } else if (section.type.valueOf() === SubNavTypes.heading) {
            return (
              <li class={item.section.length > 6 ? 'double' : ''}>
                <arvest-typography variant={TypographyVariants.navigation} class="subheading">
                  {section.name}
                </arvest-typography>
              </li>
            );
          } else if (section.type.valueOf() === SubNavTypes.link) {
            return (
              <li>
                <a href={section.href} role="menuitem">
                  <arvest-typography
                    variant={TypographyVariants.navigation}
                    class={'navigation' + section.isNew ? ' new' : ''}
                  >
                    {section.name}
                  </arvest-typography>
                </a>
                {section.isNew && (<arvest-badge color={BadgeColor.label}>New</arvest-badge>)}
              </li>
            );
          } else if (section.type.valueOf() === SubNavTypes.button) {
            return (
              <li>
                <a href={section.href} role="menuitem">
                  <arvest-button-secondary label={section.name} issmall={true}/>
                </a>
              </li>
            );
          }
          console.log('Unrecognized sub navigation type.', section);
          return null;
        })}
      </ul></li>);
    });
  }

  private displayMobileSubMenuItem = (subNav) => {
    return subNav.section.map((section) => {
      if (section.type.valueOf() === SubNavTypes.heading) {
        return (
          <arvest-typography variant={TypographyVariants.subheading} class="subheading">
            {section.name}
          </arvest-typography>
        );
      } else if (section.type.valueOf() === SubNavTypes.link) {
        return (
          <a href={section.href} role="menuitem">
            <arvest-typography
              variant={TypographyVariants.navigation}
              class={'navigation' + (section.isNew ? ' new' : '')}
            >
              {section.name}
            </arvest-typography>
            {section.isNew && (<arvest-badge color={BadgeColor.label}>New</arvest-badge>)}
          </a>
        );
      } else if (section.type.valueOf() === SubNavTypes.button) {
        return (
          <a href={section.href} role="menuitem">
            <arvest-button-primary label={section.name} />
          </a>
        );
      }
      console.log('Unrecognized sub navigation type.', section);
      return null;
    });
  }

  render (): FunctionalComponent {
    return (
      <Host>
        <div class={'wrapper' + (this.showMobileSubNav ? ' open' : '')}>
          <ul
            class={this.navType}
            role="menubar"
          >
            {this._navData.navigation.map((item, index) => {
              if (((!this.isMobile) || (this.isMobile && this.showMobileSubNav && item.subNav.length === 0))) {
                return (
                  <li
                    class={'main-menu'}
                    role="menuitem"
                  >
                    <arvest-typography
                      variant={this.isMobile ? TypographyVariants.mobileNavigation : TypographyVariants.navigation}
                      color={this.activeIndex === index ? this.activeColor : this.color}
                    >
                      <a
                        id={'main-link' + index}
                        href={item.href}
                        tabIndex={0}
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.onLeave}
                      >
                        {item.name}
                      </a>
                    </arvest-typography>
                    {(this.activeIndex === index) && !this.isMobile && <div class="custom-text-decoration"/>}
                    {!this.isMobile && (item.subNav.length > 0) && (
                      <ul class="sub-nav">
                        { this.displayDesktopSubMenu(item.subNav) }
                      </ul>
                    )}
                  </li>
                );
              }
              if (this.isMobile && this.showMobileSubNav && (item.subNav.length > 0)) {
                return (
                  <li>
                    <arvest-accordion type="mobileNav" accordiontitle={item.name}>
                      {item.subNav.map((sub) => {
                        return this.displayMobileSubMenuItem(sub);
                      })}
                      <div class="mobile-subnav-spacer"/>
                    </arvest-accordion>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </Host>
    );
  }
}
