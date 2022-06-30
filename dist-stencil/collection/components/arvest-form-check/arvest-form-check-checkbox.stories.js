import arvestFormCheckArgs from './args/arvest-form-check.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Form/Checkbox`,
  argTypes: Object.assign({}, arvestFormCheckArgs)
};
const TemplateFormCheckCheckbox = ({ label, name, ariaDescribedBy, type, value, disabled }) => `
<arvest-form-check
    label="${label}"
    name="${name}"
    aria-describedby="${ariaDescribedBy}"
    type="${type}"
    value="${value}"
    ${disabled ? 'disabled' : ''}
>
</arvest-form-check>
`, args = {
  label: 'Check me out',
  name: 'checkForm',
  ariaDescribedBy: 'checkForm',
  type: 'checkbox',
  value: 'checkFrom',
  disabled: false
};
export const Checkbox = TemplateFormCheckCheckbox.bind({});
Checkbox.args = Object.assign({}, args);
