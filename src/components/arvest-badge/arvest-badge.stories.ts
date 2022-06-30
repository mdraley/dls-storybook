import arvestBadgeArgs from './args/arvest-badge.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  'title': `${ArvestGroup}/Badge`,
  'argTypes': {
    ...arvestBadgeArgs
  }
};

const TemplateBadge = ({ color, slot }) => `
    <arvest-badge color='${color}'>${slot}</arvest-badge>
  `,

  args = {
    'slot': '30',
    'color': 'label'
  };

export const Badge = TemplateBadge.bind({});
Badge.args = {
  ...args
};
