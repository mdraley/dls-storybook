import { ComponentsGroup } from '../../global/ts/storybookGrouping';
import arvestListArgs from './args/arvest-list.args';

export default {
  'title': `${ComponentsGroup}/List`,
  'argTypes': {
    ...arvestListArgs
  }
};

const TemplateList = ({ activetag, disabledtag, color }) => `
    <arvest-list activetag='${activetag}' disabledtag='${disabledtag}' color='${color}'>
        <span>Element 1</span>
        <span>Element 2</span>
        <span>Element 3</span>
        <span>Element 4</span>
    </arvest-list>
    `,

  args = {
    'activetag': '0',
    'disabledtag': '3'
  };

export const Primary = TemplateList.bind({});
Primary.args = {
  ...args,
  color: 'primary'
};
