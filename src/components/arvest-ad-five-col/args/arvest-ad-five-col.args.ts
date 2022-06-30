import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-ad-five-col',

  arvestAdFiveColArgs = {
    'slot': {
      'description': 'Headline Text',
      'control': 'text'
    },
    'ratio': {
      'description': getDescription(
        webcomponent,
        'ratio'
      ),
      'control': {
        'type': 'select',
        'options': [
          '52',
          '21'
        ]
      }
    },
    'showcta': {
      'description': getDescription(
        webcomponent,
        'showcta'
      ),
      'control': {
        'type': 'boolean'
      }
    },
    'ctatitle': {
      'description': getDescription(
        webcomponent,
        'ctatitle'
      ),
      'control': 'text'
    },
    'url': {
      'description': getDescription(
        webcomponent,
        'url'
      ),
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
          'cobalt',
          'ocean',
          'navy'
        ]
      }
    },
    'bgimage': {
      'description': getDescription(
        webcomponent,
        'bgimage'
      ),
      'control': 'text'
    },
    'opacity': {
      'description': getDescription(
        webcomponent,
        'opacity'
      ),
      'control': 'text'
    }
  };

export default arvestAdFiveColArgs;
