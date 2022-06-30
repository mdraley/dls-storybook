import arvestButtonArgs from './args/arvest-button-primary.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Buttons/Primary`,
  argTypes: {
    ...arvestButtonArgs
  }
};

const TemplateButtonPrimary = ({
    label,
    type,
    disabled,
    isloading,
    issmall
  }) => `
    <arvest-button-primary
        label="${label}"
        type="${type}"
        ${disabled ? 'disabled' : ''}
        ${isloading ? 'isloading' : ''}
        ${issmall ? 'issmall' : ''}
    >
    </arvest-button-primary>
`,
  args = {
    label: 'Button',
    type: 'button',
    disabled: false,
    isloading: false,
    issmall: false
  };

export const Primary = TemplateButtonPrimary.bind({});
Primary.args = {
  ...args
};
