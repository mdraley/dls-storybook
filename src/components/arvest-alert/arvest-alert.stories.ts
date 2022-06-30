import arvestAlertArgs from './args/arvest-alert.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Arvest Alert`,
  argTypes: {
    ...arvestAlertArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const TemplateAlert = ({ slot, type, banner }) => `
    <arvest-alert
        type=${type}
        banner=${banner}
    >
        ${slot}
    </arvest-alert>
`,

  args = {
    type: 'default',
    banner: false,
    slot: 'Example alert text shown here.'
  };

export const ArvestAlert = TemplateAlert.bind({});
ArvestAlert.args = {
  ...args
};
