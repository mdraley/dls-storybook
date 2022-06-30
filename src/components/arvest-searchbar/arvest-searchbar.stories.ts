import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestSearchbarArgs from './args/arvest-searchbar.args';

export default {
  'title': `${ArvestGroup}/Searchbar`,
  'argTypes': {
    ...arvestSearchbarArgs
  }
};

const TemplateSearchbar = ({ links, isMobile }) => `
  <arvest-searchbar
    links="${links}"
    isMobile="${isMobile}"
  >
  </arvest-searchbar>
`;

export const Searchbar = TemplateSearchbar.bind({});

Searchbar.args = {
  links: '[{"label":"Find my routing number", "href":"https://arvest.com"}]',
  isMobile: false
};
