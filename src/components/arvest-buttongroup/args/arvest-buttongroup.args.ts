import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-buttongroup',

  arvestButtonGroupArgs = {
    'buttons': {
      'description': 'Add buttons to the component',
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

export default arvestButtonGroupArgs;
