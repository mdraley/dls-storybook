import {getDescription} from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-button-two-up',

  arvestButtonTwoUpArgs = {
    'primaryTitle': {
      'description': getDescription(
        webcomponent,
        'primaryTitle'
      ),
      'control': 'text'
    },
    'primaryUrl': {
      'description': getDescription(
        webcomponent,
        'primaryUrl'
      ),
      'control': 'text'
    },
    'secondaryTitle': {
      'description': getDescription(
        webcomponent,
        'secondaryTitle'
      ),
      'control': 'text'
    },
    'secondaryUrl': {
      'description': getDescription(
        webcomponent,
        'secondaryUrl'
      ),
      'control': 'text'
    },
    'isSmall': {
      'description': getDescription(
        webcomponent,
        'isSmall'
      ),
      'control': 'boolean'
    }
  };

export default arvestButtonTwoUpArgs;
