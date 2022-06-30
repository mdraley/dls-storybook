import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestCardFullWidthArgs from './args/arvest-card-fullwidth.args';
export default {
  title: `${ArvestGroup}/Cards: Fullwidth`,
  argTypes: Object.assign({}, arvestCardFullWidthArgs),
  parameters: {
    layout: 'fullscreen'
  }
};
const Template = ({ showheadline, showbody, showcta, headline, body, ctalabel }) => `
<arvest-card-fullwidth
    showheadline="${showheadline}"
    showbody="${showbody}"
    showcta="${showcta}"
    headline="${headline}"
    body="${body}"
    ctalabel="${ctalabel}"
>

    <div class="container">
        <div class="content">
            {this.showheadline && (
            <arvest-typography variant={TypographyVariants.h3} color={FontColor.black} class="headline">
                {this.headline}
            </arvest-typography>
            )}
            {this.showbody && (
            <arvest-typography variant={TypographyVariants.subheading} color={FontColor.black} class="subhead">
                {this.body}
            </arvest-typography>
            )}
            {this.showcta && (
            <arvest-button-tertiary
                label={this.ctalabel}
                role="button"
              ></arvest-button-tertiary>
            )}
        </div>
    </div>
</arvest-card-fullwidth>
`, args = {
  showheadline: true,
  showbody: true,
  showcta: true,
  headline: 'Lorem ipsum dolor sit, headline',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget loten.',
  ctalabel: 'Get Info'
};
export const Fullwidth = Template.bind({});
Fullwidth.args = Object.assign({}, args);
