import {Component, Host, h, Prop, State, Listen, FunctionalComponent} from '@stencil/core';
import {
  TypographyVariants,
  Color,
  ViewportBreakpoints
} from '../../global/ts/enums';
import * as Styles from './arvest-typography.styles';

@Component({
  tag: 'arvest-typography',
  styleUrl: 'arvest-typography.css',
  shadow: true
})
export class ArvestTypography {
  /** Typography styles */
  @Prop() variant: TypographyVariants = TypographyVariants.body1;

  /** Font Color */
  @Prop() color: Color;

  @State() viewport: number;

  @Listen(
    'resize',
    { target: 'window',
      capture: true }
  )
  calcViewport(): void {
    this.viewport = window.innerWidth;
  }

  private getDeviceStyles = (viewport) => {
    let deviceStyles = {};

    if (viewport < ViewportBreakpoints.mobile) {
      deviceStyles = Styles.StylesSmallDev;
    } else if (
      viewport >= ViewportBreakpoints.mobile &&
      viewport < ViewportBreakpoints.desktop
    ) {
      deviceStyles = Styles.StylesMedDev;
    } else if (viewport >= ViewportBreakpoints.desktop) {
      deviceStyles = Styles.StylesLargeDev;
    }

    return deviceStyles;
  };

  private getStyles = (...params) => {
    let useStyle = {};

    const StylesCollection = {
      ...this.getDeviceStyles(this.viewport),
      ...Styles.StylesColors
    };

    // eslint-disable-next-line array-callback-return
    params.map((style) => {
      useStyle = {
        ...useStyle,
        ...StylesCollection[style]
      };
    });
    return useStyle;
  };

  handleRender(): FunctionalComponent {
    switch (this.variant) {
    case TypographyVariants.h1:
      return (
        <h1
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.h1}`
          )}
          class={'h1 '}
        >
          <slot />
        </h1>
      );
    case TypographyVariants.h2:
      return (
        <h2
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.h2}`
          )}
          class={'h2 '}
        >
          <slot />
        </h2>
      );
    case TypographyVariants.h3:
      return (
        <h3
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.h3}`
          )}
          class={`h3 ${this.color ? this.color : ''} `}
        >
          <slot />
        </h3>
      );
    case TypographyVariants.h4:
      return (
        <h4
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.h4}`
          )}
          class={`h4 ${this.color ? this.color : ''} `}
        >
          <slot />
        </h4>
      );
    case TypographyVariants.subheading:
      return (
        <h5
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.subheading}`
          )}
          class={'subheading'}
        >
          <slot />
        </h5>
      );
    case TypographyVariants.body1:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.body1}`
          )}
          class={'body1'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.body2:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.body2}`
          )}
          class={'body2'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.action:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.action}`
          )}
          class={'action'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.navigation:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.navigation}`
          )}
          class={'navigation'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.mobileNavigation:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.mobileNavigation}`
          )}
          class={'mobileNavigation'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.labels:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.labels}`
          )}
          class={'labels'}
        >
          <slot />
        </p>
      );
    case TypographyVariants.caption:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.caption}`
          )}
          class={'caption'}
        >
          <slot />
        </p>
      );
    default:
      return (
        <p
          style={this.getStyles(
            `${this.color}`,
            `${TypographyVariants.body1}`
          )}
          class={'body1'}
        >
          <slot />
        </p>
      );
    }
  }

  componentWillRender(): void {
    this.viewport = window.innerWidth;
  }

  render(): FunctionalComponent {
    return <Host>{this.handleRender()}</Host>;
  }
}
