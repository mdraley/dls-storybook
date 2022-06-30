import { getDescription } from '../../../global/ts/globalDocs';
const webComponent = 'arvest-searchbar';
const arvestSearchbarArgs = {
  links: {
    description: getDescription(webComponent, 'links'),
    control: 'text'
  },
  isMobile: {
    description: getDescription(webComponent, 'isMobile'),
    defaultValue: { summary: 'false' },
    control: 'boolean'
  }
};
export default arvestSearchbarArgs;
