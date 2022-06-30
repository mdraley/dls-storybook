import {Component, Host, h, Prop, State, FunctionalComponent, Watch, Listen} from '@stencil/core';
import { Color, TypographyVariants, ViewportBreakpoints, CardSelector } from '../../global/ts/enums';
import {cardData} from './card-list';

@Component({
  tag: 'arvest-debit-credit-card-grid',
  assetsDirs: ['assets'],
  styleUrl: 'arvest-debit-credit-card-grid.css',
  shadow: true
})
export class ArvestDebitCreditCardGrid {
  /** Data Array to render Cards with. */
     @Prop({mutable: true}) cardData: Array<any> = cardData;

     /** Sets Parsed Data Array to State */
     @State() _cardData: Array<any> = [];

     /** Used to toggle between grid views */
     @State() showSmallGrid = true;

     @State() viewport = window.innerWidth;

     @State() isMobile = this.viewport < ViewportBreakpoints.mobile;

     /** Used to select which sorted array to display */
     @State() selectSort: string = CardSelector.localFavorites;

     @State() showDropdown = false;

     @Listen('resize', {target: 'window', capture: true})
     public calcViewport(): void {
       this.viewport = window.innerWidth;
       this.isMobile = this.viewport < ViewportBreakpoints.mobile;
     }

     @Listen('keydown')
     public handleKeyDown(ev: KeyboardEvent): void {
       if (ev.key === 'Enter') {
         this.handleToggle();
       }
     }

     @Watch('cardData')
     arrayDataWatcher(cardData) {
       if (typeof cardData === 'string') {
         this._cardData = JSON.parse(cardData);
       } else {
         this._cardData = cardData;
       }
     }

    @Watch('selectSort')
     handleSelectSort(selection: string) {
       this.selectSort = selection;
     }

    private handleToggle = () => {
      this.showSmallGrid = !this.showSmallGrid;
    };

    private toggleDropdown = () => {
      this.showDropdown = !this.showDropdown;
    };

    private getSort = () => {
      if (this.selectSort === CardSelector.localFavorites) {
        return this._cardData.sort((a, b) => (a.rating > b.rating ? -1 : 1));
      } else if (this.selectSort === CardSelector.aToZ) {
        return this._cardData.sort((a, b) => (a.label > b.label ? 1 : -1));
      }
      return this._cardData.sort((a, b) => (a.label > b.label ? -1 : 1));

    };

    private render2UpView = () => (
      <div class="two-up-grid">
        {this.getSort().map((card) => (
          <div class="two-up-card">
            <arvest-debit-credit-card-selector
              linkcta = {card.subject}
              label = {card.label}
              bgimage = {card.bgimage}
              showButton
              showLabel
              showLink
            />
          </div>
        ))}
      </div>
    );

    private render4UpView = () => (
      <div class="four-up-grid">
        {this.getSort().map((card) => (
          <div class="four-up-card">
            <arvest-debit-credit-card-selector
              linkcta = {card.subject}
              label = {card.label}
              bgimage = {card.bgimage}
              showButton
              showLabel
              showLink
            />
          </div>
        ))}
      </div>
    );

    componentWillLoad(): void {
      this.arrayDataWatcher(this.cardData);
    }

    componentWillRender(): void {
      this.viewport = window.innerWidth;
      this.isMobile = this.viewport < ViewportBreakpoints.mobile;
    }

    render(): FunctionalComponent {
      return (
        <Host>
          <div class="container">
            <div class="selectors">
              <div class="sort">
                <arvest-typography variant={TypographyVariants.body1}>Sort by:
                  <a onClick={this.toggleDropdown} tabIndex={0}><arvest-typography variant={TypographyVariants.action} color={Color.secondary01}>&nbsp;{this.selectSort}</arvest-typography><arvest-icon icon="chevronDownLight"></arvest-icon></a>
                </arvest-typography>

              </div>
              {!this.showSmallGrid && this.isMobile && (
                <div class="views">
                  <a class="two-up-active"><arvest-icon class="icon" icon="twoColumn"/></a>
                  <a onClick={this.handleToggle} tabIndex={0}><arvest-icon class="icon-active" icon="fourColumn"/></a>
                </div>
              )}
              {!this.showSmallGrid && !this.isMobile && (
                <div class="views">
                  <arvest-typography class="two-up-inactive" variant={TypographyVariants.body2} color={Color.grayscale06}>2-Up-View</arvest-typography>
                  <a onClick={this.handleToggle} tabIndex={0}><arvest-typography variant={TypographyVariants.body2} color={Color.secondary01}>4-Up-View</arvest-typography></a>
                </div>
              )}
              {this.showSmallGrid && this.isMobile && (
                <div class="views">
                  <a class="two-up-active" onClick={this.handleToggle} tabIndex={0}><arvest-icon class="icon-active" icon="twoColumn"/></a>
                  <a><arvest-icon class="icon" icon="fourColumn"/></a>
                </div>
              )}
              {this.showSmallGrid && !this.isMobile && (
                <div class="views">
                  <a class="two-up-active" onClick={this.handleToggle} tabIndex={0}><arvest-typography variant={TypographyVariants.body2} color={Color.secondary01}>2-Up-View&nbsp;</arvest-typography></a>
                  <a><arvest-typography variant={TypographyVariants.body2} color={Color.grayscale06}>4-Up-View</arvest-typography></a>
                </div>
              )}
            </div>
            {this.showDropdown ? (
              <div class="dropdown">
                <a class="select" onClick={() => this.handleSelectSort(CardSelector.localFavorites)}><arvest-typography variant={TypographyVariants.action} color={Color.secondary01}>Local Favorites</arvest-typography></a>
                <a class="select" onClick={() => this.handleSelectSort(CardSelector.aToZ)}><arvest-typography variant={TypographyVariants.action} color={Color.secondary01}>A-Z</arvest-typography></a>
                <a class="select" onClick={() => this.handleSelectSort(CardSelector.zToA)}><arvest-typography variant={TypographyVariants.action} color={Color.secondary01}>Z-A</arvest-typography></a>
              </div>
            ) : ''}
            {this.showSmallGrid ? this.render4UpView() : this.render2UpView()}
          </div>
        </Host>
      );
    }
}
