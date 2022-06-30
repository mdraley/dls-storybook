import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-card',

  arvestCardArgs = {
    'cardimgsrc': {
      'description': getDescription(
        webcomponent,
        'cardimgsrc'
      ),
      'control': 'text'
    },
    'cardtitle': {
      'description': getDescription(
        webcomponent,
        'cardtitle'
      ),
      'control': 'text'
    },
    'cardtext': {
      'description': getDescription(
        webcomponent,
        'cardtext'
      ),
      'control': 'text'
    }
  };

export default arvestCardArgs;
