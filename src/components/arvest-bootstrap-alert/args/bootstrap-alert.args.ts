import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'bootstrap-alert',

  bootstrapAlertArgs = {
    'slot': {
      'description': 'Children elements',
      'control': 'text'
    },
    'color': {
      'description': getDescription(
        webcomponent,
        'color'
      ),
      'control': {
        'type': 'select',
        'options': [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'link'
        ]
      }
    }
  };

export default bootstrapAlertArgs;
