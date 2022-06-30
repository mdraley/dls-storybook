import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-form-textinput',

  arvestFormTextInputArgs = {
    elemId: {
      description: getDescription(
        webcomponent,
        'elemId'
      ),
      control: 'text'
    },
    type: {
      description: getDescription(
        webcomponent,
        'type'
      ),
      control: 'select',
      options: [
          'text',
          'email',
          'number',
          'password'
        ]
    },
    label: {
      description: getDescription(
        webcomponent,
        'label'
      ),
      control: 'text'
    },
    ariaLabel: {
      description: getDescription(
        webcomponent,
        'ariaLabel'
      ),
      control: 'text'
    },
    ariaRequired: {
      description: getDescription(
        webcomponent,
        'ariaRequired'
      ),
      control: 'boolean'
    },
    autocomplete: {
      description: getDescription(
        webcomponent,
        'autocomplete'
      ),
      control: 'select',
      options: [
          'off',
          'on',
          'name',
          'email',
          'username',
          'new-password',
          'current-password',
          'street-address',
          'address-line1',
          'address-line2',
          'address-line3',
          'country',
          'postal-code'
        ]
    },
    value: {
      description: getDescription(
        webcomponent,
        'value'
      ),
      control: 'text'
    },
    required: {
      description: getDescription(
        webcomponent,
        'required'
      ),
      control: 'boolean'
    },
    disabled: {
      description: getDescription(
        webcomponent,
        'disabled'
      ),
      'control': 'boolean'
    },
    error: {
      description: getDescription(
        webcomponent,
        'error'
      ),
      control: 'text'
    }
  };

export default arvestFormTextInputArgs;
