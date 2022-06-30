import { getDescription } from '../../../global/ts/globalDocs';
const webComponent = 'arvest-badge';
const arvestBadgeArgs = {
  slot: {
    description: 'Text inside Badge',
    control: 'text'
  },
  color: {
    description: getDescription(webComponent, 'color'),
    defaultValue: { summary: 'label' },
    control: {
      type: 'select',
      options: [
        'label',
        'counter'
      ]
    }
  }
};
export default arvestBadgeArgs;
