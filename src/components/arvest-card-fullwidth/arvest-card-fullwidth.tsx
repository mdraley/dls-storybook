import { Component, Host, h, Prop } from '@stencil/core';
import { Color, TypographyVariants } from '../../global/ts/enums';

@Component({
  tag: 'arvest-card-fullwidth',
  styleUrl: 'arvest-card-fullwidth.css',
  shadow: true
})
export class arvestCardFullWidth {
  /** Show the Headline? */
  @Prop() showheadline?: boolean = true;

  /** Show the Body Text? */
  @Prop() showbody?: boolean = true;

  /** Show the CTA Link? */
  @Prop() showcta?: boolean = true;

  /** Headline */
  @Prop() headline?: string = 'Lorem ipsum dolor sit, headline';

  /** Body Text */
  @Prop() body?: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget loten.';

  /** Label for the CTA */
  @Prop() ctalabel?: string = 'Get Info';

  render () {
    return (
      <Host>
        <div class="container">
          <div class="content">
            {this.showheadline &&
              <arvest-typography
                variant={TypographyVariants.h3}
                color={Color.black}
                class="headline"
              >
                {this.headline}
              </arvest-typography>
            }
            {this.showbody &&
              <arvest-typography
                variant={TypographyVariants.subheading}
                color={Color.black}
                class="subhead"
              >
                {this.body}
              </arvest-typography>
            }
            {this.showcta &&
              <arvest-button-tertiary
                label={this.ctalabel}
                role="button"
                class="cta"
              ></arvest-button-tertiary>
            }
          </div>
        </div>
      </Host>
    );
  }
}
