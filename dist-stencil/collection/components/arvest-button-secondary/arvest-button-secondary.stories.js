import arvestButtonArgs from './args/arvest-button-secondary.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Buttons/Secondary`,
  argTypes: Object.assign({}, arvestButtonArgs),
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        {
          name: 'primary01',
          value: '#001b44'
        },
        {
          name: 'grayscale07',
          value: '#494a51'
        }
      ]
    }
  }
};
const TemplateButtonSecondary = ({ label, type, disabled, isloading, issmall }) => `
    <arvest-button-secondary
        label="${label}"
        type="${type}"
        ${disabled ? 'disabled' : ''}
        ${isloading ? 'isloading' : ''}
        ${issmall ? 'issmall' : ''}
    >
    </arvest-button-secondary>
`, args = {
  label: 'Button',
  type: 'button',
  disabled: false,
  isloading: false,
  issmall: false
};
export const Secondary = TemplateButtonSecondary.bind({});
Secondary.args = Object.assign({}, args);
