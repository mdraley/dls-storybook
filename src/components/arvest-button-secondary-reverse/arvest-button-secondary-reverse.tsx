import {Component, Host, Prop, State, h, FunctionalComponent} from '@stencil/core';
import {
  ButtonType,
  TypographyVariants,
  Color
} from '../../global/ts/enums';

import Styles from './arvest-button-secondary-reverse.styles';

@Component({
  tag: 'arvest-button-secondary-reverse',
  styleUrl: 'arvest-button-secondary-reverse.css',
  shadow: true
})
export class ArvestButtonSecondaryReverse {
  /** Text inside the button [Required] */
  @Prop() label = 'Button';

  /** Change the type of the component using the ButtonType enum */
  @Prop() type?: ButtonType;

  /** If true, disable mouse events */
  @Prop() disabled?: boolean;

  /** If true, spinner for loading */
  @Prop() isloading?: boolean;

  /** If true, button size will be smaller*/
  @Prop() issmall?: boolean;

  @State() _label?: string;

  @State() color = Color.white;

  @State() isactive = false;

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

  private setActive = () => this.isactive = true;

  private setNotActive = () => this.isactive = false;

  componentWillRender () {
    if (this.isactive) {
      this.color = Color.secondary01;
    } else {
      this.color = Color.white;
    }
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
          onMouseDown={(e) => e.preventDefault()}
          onFocus={this.setActive}
          onBlur={this.setNotActive}
          tabIndex={this.disabled || this.isloading ? -1 : 0}
          class={`${this.disabled || this.isloading ? 'default' : 'button'}`}
          type={this.type}
          aria-label={this.label}
          part="btn-custom"
          style={this.getStyles(
            `${(this.disabled || this.isloading) && 'disabled'}`,
            `${this.issmall && 'small'}`
          )}
        >
          <arvest-typography
            variant={
              this.issmall
                ? TypographyVariants.navigation
                : TypographyVariants.action
            }
            color={
              this.disabled || this.isloading ? Color.grayscale03 : this.color
            }
          >
            <div
              style={this.getStyles(`${this.issmall && 'smallContent'}`)}
              class="button-content"
            >
              {this.isloading &&
                <div class="button-spinner">
                  <arvest-spinner isreverse />
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
