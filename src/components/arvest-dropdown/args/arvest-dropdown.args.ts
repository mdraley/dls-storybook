import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-dropdown',

  arvestDropdown = {
    'identifier': {
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
    }
  };

export default arvestDropdown;
