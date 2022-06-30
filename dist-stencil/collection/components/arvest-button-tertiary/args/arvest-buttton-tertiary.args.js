import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-button-tertiary', arvestButtonArgs = {
  label: {
    description: getDescription(webcomponent, 'label'),
    control: 'text'
  },
  type: {
    description: getDescription(webcomponent, 'type'),
    control: {
      type: 'inline-radio',
      options: [
        'button',
        'reset',
        'submit'
      ]
    }
  },
  disabled: {
    description: getDescription(webcomponent, 'disabled'),
    control: {
      type: 'boolean'
    }
  }
};
export default arvestButtonArgs;
