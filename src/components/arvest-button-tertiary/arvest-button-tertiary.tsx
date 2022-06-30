import {Component, Host, Prop, State, h, FunctionalComponent} from '@stencil/core';
import {
  ButtonType,
  TypographyVariants,
  Color
} from '../../global/ts/enums';
import Styles from './arvest-button-tertiary.styles';

@Component({
  tag: 'arvest-button-tertiary',
  styleUrl: 'arvest-button-tertiary.css',
  shadow: true
})

export class ArvestButtonTertiary {
  /** Text inside the button. Must not be more than 30 characters [Required] */
  @Prop() label = 'Button';

  /** Change the type of the component using the ButtonType enum */
  @Prop() type?: ButtonType;

  /** If true, disable mouse events */
  @Prop() disabled?: boolean;

  @State() _label?: string;

  @State() color = Color.secondary01;

  private labelsize = 30;

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

  private setDefaultColot = () => {
    this.color = Color.secondary01;
  };

  private setHoverColor = () => {
    this.color = Color.hover01;
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
          onMouseOver={this.setHoverColor}
          onMouseLeave={this.setDefaultColot}
          class={`${this.disabled ? 'default' : 'button'}`}
          type={this.type}
          part="btn-custom"
          style={this.getStyles(`${this.disabled && 'disabled'}`)}
        >
          <div class="button-content--wrapper">
            <arvest-typography
              variant={TypographyVariants.action}
              color={this.disabled ? Color.grayscale03 : this.color}
            >
              <div class="button-content">{this._label}</div>
            </arvest-typography>
            {this.disabled
              ? <arvest-icon icon="arrowRightSolidDisabled" class="icon" />
              : <arvest-icon icon="arrowRightSolid" class="icon" />
            }
          </div>
        </button>
      </Host>
    );
  }
}
