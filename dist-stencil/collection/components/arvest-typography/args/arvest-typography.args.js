import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-typography', arvestTypographyArgs = {
  'variant': {
    'description': getDescription(webcomponent, 'variant'),
    'control': {
      'type': 'select',
      'options': [
        'h1',
        'h2',
        'h3',
        'h4',
        'subheading',
        'body1',
        'body2',
        'action',
        'navigation',
        'labels',
        'caption'
      ]
    }
  },
  'text': {
    'description': 'Text example',
    'control': 'text'
  }
};
export default arvestTypographyArgs;
