import arvestButtonArgs from './args/arvest-buttton-tertiary.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Buttons/Tertiary`,
  argTypes: {
    ...arvestButtonArgs
  }
};

const TemplateButtonTertiary = ({ label, type, disabled }) => `
    <arvest-button-tertiary
        label="${label}"
        type="${type}"
        ${disabled ? 'disabled' : ''}
    >
    </arvest-button-tertiary>
`,
  args = {
    label: 'Button',
    type: 'button',
    disabled: false
  };

export const Tertiary = TemplateButtonTertiary.bind({});
Tertiary.args = {
  ...args
};
