import {Component, Host, h, Prop, FunctionalComponent, State, Listen, Element} from '@stencil/core';
import {TypographyVariants, ViewportBreakpoints} from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-fullwidth-product-features',
  styleUrl: 'arvest-card-fullwidth-product-features.css',
  shadow: true
})
export class ArvestCardFullwidthProductFeatures {
  @Element() el: HTMLElement;

  /** ID component */
  @Prop() identifier = 'arvest-fullwidth-card-cta-icon';

  /** Main title for the component */
  @Prop() cardTitle: string;

  /** Description text */
  @Prop() description: string;

  /** Optional list dscription text */
  @Prop() listDescription?: string;

  /** List items to be displayed (pipe separated, no spaces) */
  @Prop() listItems: string;

  /** Icon names to be displayed (pipe separated, no spaces) */
  @Prop() icons: string;

  /** Icon links, in same order as icons (pipe separated, no spaces) */
  @Prop() iconTips: string;

  /** Primary CTA title */
  @Prop() primaryCtaTitle?: string;

  /** Primary CTA URL */
  @Prop() primaryCtaUrl?: string;

  /** Secondary CTA title */
  @Prop() secondaryCtaTitle?: string;

  /** Secondary CTA URL */
  @Prop() secondaryCtaUrl?: string;

  @State() _description: string;

  @State() _listItems: string[];

  @State() _icons: string[];

  @State() _iconTips: string[];

  @State() isMobile = window.innerWidth < ViewportBreakpoints.tablet;

  @Listen(
    'resize',
    {
      target: 'window',
      capture: true
    }
  )
  handleResize(e: UIEvent): void {
    const window = e.target as Window;
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
  }

  private handleLegendOpen = () => {
    const element = this.el.shadowRoot.getElementById(this.identifier + '-feature-overlay');
    element.setAttribute('visible', 'true');
    element.addEventListener('clickClose', () => this.handleLegendClose());
  }

  private handleLegendClose = () => {
    const element = this.el.shadowRoot.getElementById(this.identifier + '-feature-overlay');
    element.setAttribute('visible', 'false');
  }

  componentWillRender(): void {
    this._description = this.description.substring(0, 100);
    this._listItems = this.listItems.split('|').slice(0, 5);
    this._icons = this.icons.split('|').slice(0, 8);
    this._iconTips = this.iconTips.split('|').slice(0, 8);
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="card-container">
          <div class="card-copy">
            <arvest-typography
              variant={TypographyVariants.h4}
              class="card-title"
            >
              {this.cardTitle}
            </arvest-typography>
            <arvest-typography
              variant={TypographyVariants.body1}
              class="card-description"
            >
              {this.description}
            </arvest-typography>
          </div>
          <div class="card-list">
            <div class="icons">
              <div class="icon-list">
                {this._icons.map((icon, index) => {
                  if (this.isMobile) {
                    return (
                      <div class="icon-wrapper">
                        <arvest-icon icon={icon}/>
                      </div>
                    );
                  }
                  return (
                    <arvest-tooltip message={this._iconTips[index]} arrow={true}>
                      <div class="icon-wrapper">
                        <arvest-icon icon={icon} />
                      </div>
                    </arvest-tooltip>
                  );
                })}
              </div>
              {this.isMobile ? (
                <arvest-icon icon={'info-circle-light'} class="info" onClick={this.handleLegendOpen} />
              ) : (
                <arvest-icon icon={'info-circle-light'} class="info"/>
              )}
            </div>
            {this.listDescription && (
              <arvest-typography
                variant={TypographyVariants.body1}
                class="list-description"
              >
                {this.listDescription}
              </arvest-typography>
            )}
            <div class="feature-list">
              <ul>
                {this._listItems.map((item) => {
                  return (
                    <li>
                      <arvest-typography variant={TypographyVariants.body2}>
                        {item}
                      </arvest-typography>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div class="card-cta">
            {this.secondaryCtaTitle && (
              <a href={this.secondaryCtaUrl} class="cta-secondary">
                <arvest-button-secondary label={this.secondaryCtaTitle} issmall={true} />
              </a>
            )}
            {this.primaryCtaTitle && (
              <a href={this.primaryCtaUrl} class="cta-primary">
                <arvest-button-primary label={this.primaryCtaTitle} issmall={true} />
              </a>
            )}
          </div>
        </div>
        {this.isMobile && (
          <arvest-overlay id={this.identifier + '-feature-overlay'}>
            <arvest-modal
              id={this.identifier}
              heading={'Legend'}
              size={'small'}
            >
              <div class="legend">
                {this._icons.map((icon, index) => {
                  return (
                    <div class="legend-icon">
                      <div class="icon-wrapper">
                        <arvest-icon icon={icon}/>
                      </div>
                      <arvest-typography variant={TypographyVariants.body1}>
                        {this._iconTips[index]}
                      </arvest-typography>
                    </div>
                  );
                })}
              </div>
            </arvest-modal>
          </arvest-overlay>
        )}
      </Host>
    );
  }
}
