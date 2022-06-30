import arvestBreadcrumb from './args/arvest-breadcrumb.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  'title': `${ArvestGroup}`,
  'argTypes': Object.assign({}, arvestBreadcrumb),
  parameters: {
    layout: 'padded'
  }
};
const TemplateBreadcrumb = ({ links }) => {
  const arrayWatcher = (array) => array.split(','), mapLinks = (array) => array.map((link) => `{"title":"${link}","url":"javascript:void(0)"}`), linkArray = arrayWatcher(links);
  return `<arvest-breadcrumb links='[${mapLinks(linkArray)}]'></arvest-breadcrumb>`;
};
export const Breadcrumb = TemplateBreadcrumb.bind({});
Breadcrumb.args = {
  'links': 'Home, Secondary, Tertiary, Quaternary, Quinary, Senary'
};
