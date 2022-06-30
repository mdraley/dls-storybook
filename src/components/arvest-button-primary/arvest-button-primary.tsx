import {Component, Host, Prop, h, State, FunctionalComponent} from '@stencil/core';
import {
  ButtonType,
  TypographyVariants,
  Color
} from '../../global/ts/enums';

import Styles from './arvest-button-primary.styles';

@Component({
  tag: 'arvest-button-primary',
  styleUrl: 'arvest-button-primary.css',
  shadow: true
})
export class ArvestButtonPrimary {
  /** Text inside the button. Must not be more than 25 characters. [Required] */
  @Prop() label = 'Button';

  /** Change the type of the component using the ButtonType enum */
  @Prop() type?: ButtonType;

  /** If true, disable mouse events */
  @Prop() disabled?: boolean;

  /** If true, spinner for loading */
  @Prop() isloading?: boolean;

  /** If true, button size will be smaller*/
  @Prop() issmall?: boolean;

  /** Custom button width */
  @Prop() width?: number;

  @State() _label?: string;

  private labelsize = 25;

  private getStyles = (...params) => {
    let useStyle = {};
    // eslint-disable-next-line array-callback-return
    params.map((style) => {
      useStyle = {
        ...useStyle,
        ...Styles[style]
      };
    });
    return useStyle;
  };

  private getButtonStyle = () => {
    let buttonStyle = this.getStyles(
      `${(this.disabled || this.isloading) && 'disabled'}`,
      `${this.issmall && 'small'}`
    );
    if (this.width) {
      buttonStyle = {
        ...buttonStyle,
        width: this.width + 'px'
      };
    }

    return buttonStyle;
  };

  componentWillRender(): void {
    this._label = this.label;
    if (this.label.length > this.labelsize) {
      this._label = this.label.slice(
        0,
        this.labelsize
      );
    }
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <button
          aria-label={this.label}
          onMouseDown={(e) => e.preventDefault()}
          tabIndex={this.disabled || this.isloading ? -1 : 0}
          class={`${this.disabled || this.isloading ? 'default' : 'button'}`}
          type={this.type}
          part="btn-custom"
          style={this.getButtonStyle()}
          disabled={this.disabled}
        >
          <arvest-typography
            variant={
              this.issmall
                ? TypographyVariants.navigation
                : TypographyVariants.action
            }
            color={
              this.disabled || this.isloading ? Color.grayscale04 : Color.white
            }
          >
            <div
              style={this.getStyles(`${this.issmall && 'smallContent'}`)}
              class="button-content"
            >
              {this.isloading &&
                <div class="button-spinner">
                  <arvest-spinner />
                </div>
              }
              {this.isloading ? 'Loading...' : this._label}
            </div>
          </arvest-typography>
        </button>
      </Host>
    );
  }
}
