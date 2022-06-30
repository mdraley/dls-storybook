import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-list', arvestListArgs = {
  'color': {
    'description': getDescription(webcomponent, 'color'),
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
  },
  'activetag': {
    'description': getDescription(webcomponent, 'activetag'),
    'control': 'text'
  },
  'disabledtag': {
    'description': getDescription(webcomponent, 'disabledtag'),
    'control': 'text'
  }
};
export default arvestListArgs;
