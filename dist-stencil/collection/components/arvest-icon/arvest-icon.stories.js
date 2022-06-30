import arvestIconArgs from './args/arvest-icon.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Icons/Icon Component`,
  argTypes: Object.assign({}, arvestIconArgs)
};
const TemplateIcon = ({ icon }) => `
    <arvest-icon icon=${icon} />
`, args = {
  icon: 'bell-light'
};
export const ArvestIcon = TemplateIcon.bind({});
ArvestIcon.args = Object.assign({}, args);
