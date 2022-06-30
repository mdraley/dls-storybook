import {Component, Host, h, State, Prop, FunctionalComponent} from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-nav-mainlink',
  styleUrl: 'arvest-nav-mainlink.css',
  shadow: true
})

export class ArvestNavMainlink {
  /** If true, change to active styles */
  @Prop() isactive = false;

  /** If true, change font colors for light mode */
  @Prop() islightmode = false;

  @Prop() mobile = false;

  @State() isunderline = false;

  @State() color: Color;

  @State() activeColor: Color;

  private setHover = () => {
    this.color = this.islightmode ? Color.black : Color.white;
  };

  private setDefault = () => {
    this.color = this.islightmode ? Color.black : Color.white;
  };

  componentWillLoad(): void {
    this.color = this.islightmode ? Color.black : Color.white;
    this.activeColor = this.islightmode ? Color.black : Color.white;
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <arvest-typography
          variant={this.mobile ? TypographyVariants.mobileNavigation : TypographyVariants.navigation}
          color={this.isactive ? this.activeColor : this.color}
          onMouseEnter={this.setHover}
          onMouseLeave={this.setDefault}
        >
          <slot />
        </arvest-typography>
        {this.isactive && <div class="custom-text-decoration" />}
      </Host>
    );
  }
}
