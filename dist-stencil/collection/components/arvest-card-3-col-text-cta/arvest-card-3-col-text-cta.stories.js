import arvestCard3ColTextCtaArgs from './args/arvest-card-3-col-text-cta.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Cards: 3 column/Text and CTA`,
  argTypes: Object.assign({}, arvestCard3ColTextCtaArgs),
  parameters: {
    layout: 'fullscreen'
  }
};
const Template = ({ mainheadline, titleone, bodyone, ctaone, linkone, titletwo, bodytwo, ctatwo, linktwo, titlethree, bodythree, ctathree, linkthree, titlefour, bodyfour, ctafour, linkfour }) => `
    <arvest-card-3-col-text-cta
      mainheadline="${mainheadline}"
      titleone="${titleone}"
      bodyone="${bodyone}"
      ctaone="${ctaone}"
      linkone="${linkone}"
      titletwo="${titletwo}"
      bodytwo="${bodytwo}"
      ctatwo="${ctatwo}"
      linktwo="${linktwo}"
      titlethree="${titlethree}"
      bodythree="${bodythree}"
      ctathree="${ctathree}"
      linkthree="${linkthree}"
      titlefour="${titlefour}"
      bodyfour="${bodyfour}"
      ctafour="${ctafour}"
      linkfour="${linkfour}"
    ></arvest-card-3-col-text-cta>
  `, args = {
  mainheadline: 'How can we help?',
  titleone: 'Title one',
  bodyone: 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.',
  ctaone: 'Get started',
  linkone: '#',
  titletwo: 'Title two',
  bodytwo: 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.',
  ctatwo: 'Get started',
  linktwo: '#',
  titlethree: 'Title three',
  bodythree: 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.',
  ctathree: 'Get started',
  linkthree: '#',
  titlefour: 'Title four',
  bodyfour: 'Lorem ipsum dolor sit amet, consectetur, adipiscing, elit ut aliquam, purus sit amet, lucts venenatis urna, porttitor.',
  ctafour: 'Get started',
  linkfour: '#'
};
export const TextAndCTA = Template.bind({});
TextAndCTA.args = Object.assign({}, args);
