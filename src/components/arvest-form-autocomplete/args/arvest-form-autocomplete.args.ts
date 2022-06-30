import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-autocomplete',

  arvestDropdown = {
    'elemId': {
      'description': getDescription(
        webcomponent,
        'identifier'
      ),
      'control': 'text'
    },
    'label': {
      'description': getDescription(
        webcomponent,
        'label'
      ),
      'control': 'text'
    },
    'options': {
      'description': getDescription(
        webcomponent,
        'options'
      ),
      'control': 'text'
    },
    'width': {
      'description': getDescription(
        webcomponent,
        'width'
      ),
      'control': 'text'
    },
    'scrollEnabled': {
      'description': getDescription(
        webcomponent,
        'scrollEnabled'
      ),
      'control': 'boolean'
    },
    'disabled': {
      'description': getDescription(
        webcomponent,
        'disabled'
      ),
      'control': 'boolean'
    },
    'name': {
      'description': getDescription(
        webcomponent,
        'name'
      ),
      'control': 'text'
    },
    'small': {
      'description': getDescription(
        webcomponent,
        'small'
      ),
      'control': 'boolean'
    },
    'placeholder': {
      'description': getDescription(
        webcomponent,
        'placeholder'
      ),
      'control': 'text'
    },
    'required': {
      'description': getDescription(
        webcomponent,
        'required'
      ),
      'control': 'boolean'
    },
    'autocomplete': {
      'description': getDescription(
        webcomponent,
        'autocomplete'
      ),
      control: {
        type: 'radio',
        options: [
          'on',
          'off'
        ]
      }
    },
    'value': {
      'description': getDescription(
        webcomponent,
        'value'
      ),
      'control': 'text'
    }
  };

export default arvestDropdown;
