import arvestFormTextInputArgs from './args/arvest-form-textinput.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Form/Text Input`,
  argTypes: {
    ...arvestFormTextInputArgs
  }
};

const TemplateTextInput = ({
    elemId,
    type,
    label,
    ariaLabel,
    ariaRequired,
    autocomplete,
    required,
    disabled,
    error,
    value
  }) => `
    <arvest-form-textinput
        style="width: 100%;"
        id="${elemId}"
        class="form-control"
        type="${type}"
        label="${label}"
        aria-label="${ariaLabel}"
        aria-required="${ariaRequired}"
        autocomplete="${autocomplete}"
        required="${required}"
        disabled="${disabled}"
        error="${error}"
        value="${value}"
    ></arvest-form-textinput>
`,

  args = {
    elemId: 'firstname',
    type: 'text',
    label: 'First Name',
    ariaLabel: 'Enter your First Name',
    ariaRequired: false,
    autocomplete: 'on',
    required: true,
    disabled: false,
    error: 'Please enter your first name.',
    value: undefined
  };

export const TextInput = TemplateTextInput.bind({});
TextInput.args = {
  ...args
};
