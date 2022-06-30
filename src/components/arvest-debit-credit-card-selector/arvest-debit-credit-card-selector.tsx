import { Component, Host, Prop, h, FunctionalComponent, State, Watch } from '@stencil/core';

@Component({
  tag: 'arvest-debit-credit-card-selector',
  styleUrl: 'arvest-debit-credit-card-selector.css',
  shadow: true
})
export class ArvestDebitCreditCardSelector {
  /** Link CTA text */
  @Prop() linkcta: string;

  /** Label text for card */
  @Prop() label?: string;

  /** Button CTA text */
  @Prop() selectButton?: string = 'Select';

  /** Turn Link on/off */
  @Prop() showLink?: boolean;

  /** Turn Label on/off */
  @Prop() showLabel?: boolean;

  /** Turn Button on/off */
  @Prop() showButton?: boolean;

  /** URL for background image */
  @Prop({mutable: true}) bgimage?: string;

  @Watch('bgimage')
  setBgimage (newValue: string): void {
    this._bgimage = newValue;
  }

  @State() _bgimage?: string;

  componentWillLoad(): void {
    this._bgimage = this.bgimage;
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div class="container">
          <div
            class="bgimage"
            style={{ 'background-image': `url(${this._bgimage})` }}
          />
          <div class="content">
            {this.showLink && this.showLabel ? (
              <div class="cta">
                <a class="link" href="#">{this.linkcta}</a>
                <label class="card-name">{this.label}</label>
              </div>) : (
              <div>
                {this.showLink ? <a class="link__alone" href="#">{this.linkcta}</a> : ''}
                {this.showLabel ? <label class="card-name">{this.label}</label> : ''}
              </div>
            )}
            <div class="button-cta">
              {this.showButton ? <arvest-button-primary class="select-button" label={this.selectButton} issmall={true}/> : ''}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
