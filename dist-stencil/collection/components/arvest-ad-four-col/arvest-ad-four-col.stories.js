import arvestAdFourColArgs from './args/arvest-ad-four-col.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Ads/4 column`,
  argTypes: Object.assign({}, arvestAdFourColArgs),
  parameters: {
    layout: 'centered'
  }
};
const TemplateAdFourCol = ({ color, size, showcta, ctatitle, url, bgimage, opacity, slot }) => `
    <arvest-ad-four-col
        color="${color}"
        size="${size}"
        showcta="${showcta}"
        ctatitle="${ctatitle}"
        url="${url}"
        bgimage="${bgimage}"
        opacity="${opacity}"
    >
        ${slot}
    </arvest-ad-four-col>
`, args = {
  slot: 'Lorem ipsum dolor sit amet consectetur.',
  color: 'cobalt',
  size: '',
  showcta: true,
  ctatitle: 'Button',
  url: '#',
  bgimage: '/assets/images/pattern.svg',
  opacity: '0.5'
};
export const ArvestAdFourCol = TemplateAdFourCol.bind({});
ArvestAdFourCol.args = Object.assign({}, args);
