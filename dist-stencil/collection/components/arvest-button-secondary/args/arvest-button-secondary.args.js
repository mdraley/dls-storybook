import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-button-secondary', arvestButtonArgs = {
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
  },
  isloading: {
    description: getDescription(webcomponent, 'isloading'),
    control: {
      type: 'boolean'
    }
  },
  issmall: {
    description: getDescription(webcomponent, 'issmall'),
    control: {
      type: 'boolean'
    }
  }
};
export default arvestButtonArgs;
