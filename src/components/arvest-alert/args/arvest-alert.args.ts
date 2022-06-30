import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-alert',

  arvestAlertArgs = {
    'slot': {
      'description': 'Alert Text',
      'control': 'text'
    },
    'type': {
      'description': getDescription(
        webcomponent,
        'type'
      ),
      'control': {
        'type': 'select',
        'options': [
          'default',
          'alert',
          'caution',
          'confirmation',
          'info'
        ]
      }
    },
    'banner': {
      'description': getDescription(
        webcomponent,
        'banner'
      ),
      'control': {
        'type': 'boolean'
      }
    }
  };

export default arvestAlertArgs;
