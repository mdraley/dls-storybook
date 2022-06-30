import arvestFormCheckArgs from './args/arvest-form-check.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Form/Radio`,
  argTypes: {
    ...arvestFormCheckArgs
  }
};

const TemplateFormCheckRadio = ({
    label,
    name,
    ariaDescribedBy,
    type,
    value,
    disabled
  }) => `
    <arvest-form-check
        label="${label}"
        name="${name}"
        aria-describedby="${ariaDescribedBy}"
        type="${type}"
        value="${value}"
        ${disabled ? 'disabled' : ''}
    >
    </arvest-form-check>
`,
  args = {
    label: 'Check me out',
    name: 'checkForm',
    ariaDescribedBy: 'checkForm',
    type: 'radio',
    value: 'checkFrom',
    disabled: false
  };

export const Radio = TemplateFormCheckRadio.bind({});
Radio.args = {
  ...args
};
