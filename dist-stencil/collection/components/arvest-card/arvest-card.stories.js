import arvestCardArgs from './args/arvest-card.args';
import { ComponentsGroup } from '../../global/ts/storybookGrouping';
export default {
  'title': `${ComponentsGroup}/Card`,
  'argTypes': Object.assign({}, arvestCardArgs)
};
const TemplateCard = ({ cardimgsrc, cardtitle, cardtext }) => `
    <arvest-card style="width:30%;" cardimgsrc="${cardimgsrc}" cardtitle="${cardtitle}" cardtext="${cardtext}"></arvest-card>
    `, args = {
  'cardimgsrc': 'https://www.arvest.com/arvest.com/images/slides/Apr21-slide-1.jpg',
  'cardtitle': 'Title of First Card',
  'cardtext': 'This is an example of the card description area. Description text goes here.'
};
export const SingleCard = TemplateCard.bind({});
SingleCard.args = Object.assign({}, args);
