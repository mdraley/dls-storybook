import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-ad-four-col', arvestAdFourColArgs = {
  'slot': {
    'description': 'Headline Text',
    'control': 'text'
  },
  'color': {
    'description': getDescription(webcomponent, 'color'),
    'control': {
      'type': 'select',
      'options': [
        'cobalt',
        'ocean',
        'navy'
      ]
    }
  },
  'size': {
    'description': getDescription(webcomponent, 'size'),
    'control': {
      'type': 'select',
      'options': [
        'small',
        'large'
      ]
    }
  },
  'showcta': {
    'description': getDescription(webcomponent, 'showcta'),
    'control': {
      'type': 'boolean'
    }
  },
  'ctatitle': {
    'description': getDescription(webcomponent, 'ctatitle'),
    'control': 'text'
  },
  'url': {
    'description': getDescription(webcomponent, 'url'),
    'control': 'text'
  },
  'bgimage': {
    'description': getDescription(webcomponent, 'bgimage'),
    'control': 'text'
  },
  'opacity': {
    'description': getDescription(webcomponent, 'opacity'),
    'control': 'text'
  }
};
export default arvestAdFourColArgs;
