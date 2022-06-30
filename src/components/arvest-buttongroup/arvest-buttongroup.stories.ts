import arvestButtonGroupArgs from './args/arvest-buttongroup.args';
import { ComponentsGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ComponentsGroup}/Button Group`,
  argTypes: {
    ...arvestButtonGroupArgs
  }
};

const TemplateButtonGroup = ({ buttons, color }) => {
    const arrayWatcher = (array) => array.split(','),
      mapButtons = (array) => array.map((button) => `<arvest-button-primary  label='${button}' color='${color}'></arvest-button-primary>`),
      cleanCommasFromStr = (str) => str.split(',').join(''),
      buttonsArray = arrayWatcher(buttons);

    return cleanCommasFromStr(`
        <arvest-buttongroup color='${color}'>
            ${mapButtons(buttonsArray)}
        </arvest-buttongroup>
    `);
  },
  args = {
    buttons: 'First,Second,Third'
  };

export const Primary = TemplateButtonGroup.bind({});
Primary.args = {
  ...args,
  color: 'primary'
};

export const Secondary = TemplateButtonGroup.bind({});
Secondary.args = {
  ...args,
  color: 'secondary'
};
