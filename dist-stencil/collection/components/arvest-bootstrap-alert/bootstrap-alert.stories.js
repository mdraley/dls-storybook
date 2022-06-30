import bootstrapAlertArgs from './args/bootstrap-alert.args';
import { ComponentsGroup } from '../../global/ts/storybookGrouping';
export default {
  'title': `${ComponentsGroup}/Bootstrap Alert`,
  'argTypes': Object.assign({}, bootstrapAlertArgs)
};
const TemplateAlert = ({ slot, color }) => `
    <bootstrap-alert color=${color}>${slot}</bootstrap-alert>
`, args = {
  'slot': 'Example regular alert'
};
export const Primary = TemplateAlert.bind({});
Primary.args = Object.assign(Object.assign({}, args), { 'color': 'primary' });
export const Secondary = TemplateAlert.bind({});
Secondary.args = Object.assign(Object.assign({}, args), { 'color': 'secondary' });
export const Success = TemplateAlert.bind({});
Success.args = Object.assign(Object.assign({}, args), { 'color': 'success' });
export const Warning = TemplateAlert.bind({});
Warning.args = Object.assign(Object.assign({}, args), { 'color': 'warning' });
export const Danger = TemplateAlert.bind({});
Danger.args = Object.assign(Object.assign({}, args), { 'color': 'danger' });
export const Info = TemplateAlert.bind({});
Info.args = Object.assign(Object.assign({}, args), { 'color': 'info' });
