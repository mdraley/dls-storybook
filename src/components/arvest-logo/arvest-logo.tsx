import { Component, Host, h, Prop, State } from '@stencil/core';
import { LogoColor } from '../../global/ts/enums';
import ArvestWhite from '../../assets/logo/Arvest_White.svg';
import ArvestBlack from '../../assets/logo/Arvest_Black.svg';
import ArvestBlue from '../../assets/logo/Arvest_Blue.svg';

@Component({
  tag: 'arvest-logo',
  styleUrl: 'arvest-logo.css',
  shadow: true
})

export class ArvestLogo {
  /**
   * Pass in a variant to change the logo color. Options are white = "white",
   *black = "black", and blue = "blue". This is not required. The default is white.
   */
  @Prop() variant: LogoColor = LogoColor.white;

  /** Pass in a url as a string for a redirect. This is optional. */
  @Prop() url = 'https://www.arvest.com/';

  @State() currentLogo = ArvestWhite;

  private getLogo = (variant) => {
    switch (variant) {
    case LogoColor.white:
      return ArvestWhite;
    case LogoColor.black:
      return ArvestBlack;
    case LogoColor.blue:
      return ArvestBlue;
    default:
      return null;
    }
  };

  render () {
    return (
      <Host>
        <a href={this.url}>
          <img src={this.getLogo(this.variant)} alt="Arvest Official Logo"></img>
        </a>
      </Host>
    );
  }
}
