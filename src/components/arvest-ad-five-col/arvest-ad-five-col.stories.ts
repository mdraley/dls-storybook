import arvestAdFiveColArgs from './args/arvest-ad-five-col.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Ads/5 column`,
  argTypes: {
    ...arvestAdFiveColArgs
  },
  parameters: {
    layout: 'centered'
  }
};

const TemplateAdFiveCol = ({ slot, ratio, showcta, ctatitle, url, color, bgimage, opacity }) => `
    <arvest-ad-five-col
        ratio="${ratio}"
        showcta="${showcta}"
        ctatitle="${ctatitle}"
        url="${url}"
        color="${color}"
        bgimage="${bgimage}"
        opacity="${opacity}"
    >
        ${slot}
    </arvest-ad-five-col>
`,

  args = {
    slot: 'Lorem ipsum dolor sit amet consectetur.',
    ratio: '52',
    showcta: true,
    ctatitle: 'Button',
    url: '#',
    color: 'cobalt',
    bgimage: '/assets/images/pattern.svg',
    opacity: '0.5'
  };

export const ArvestAdFiveCol = TemplateAdFiveCol.bind({});
ArvestAdFiveCol.args = {
  ...args
};
