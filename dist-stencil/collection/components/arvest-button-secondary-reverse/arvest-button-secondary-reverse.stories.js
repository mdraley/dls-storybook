import arvestButtonArgs from './args/arvest-button-secondary-reverse.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Buttons/Secondary Reverse`,
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
const TemplateButtonSecondaryReverse = ({ label, type, disabled, isloading, issmall }) => `
    <arvest-button-secondary-reverse
        label="${label}"
        type="${type}"
        ${disabled ? 'disabled' : ''}
        ${isloading ? 'isloading' : ''}
        ${issmall ? 'issmall' : ''}
    >
    </arvest-button-secondary-reverse>
`, args = {
  label: 'Button',
  type: 'button',
  disabled: false,
  isloading: false,
  issmall: false
};
export const SecondaryReverse = TemplateButtonSecondaryReverse.bind({});
SecondaryReverse.args = Object.assign({}, args);
SecondaryReverse.parameters = {
  backgrounds: { default: 'primary01' }
};
