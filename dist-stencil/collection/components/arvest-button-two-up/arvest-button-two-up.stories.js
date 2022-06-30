import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestButtonTwoUpArgs from './args/arvest-button-two-up.args';
export default {
  title: `${ArvestGroup}/Buttons`,
  argTypes: Object.assign({}, arvestButtonTwoUpArgs)
};
const TemplateButtonTwoUp = ({ primaryTitle, primaryUrl, secondaryTitle, secondaryUrl, isSmall }) => `
  <arvest-button-two-up
    primary-title="${primaryTitle}"
    primary-url="${primaryUrl}"
    secondary-title="${secondaryTitle}"
    secondary-url="${secondaryUrl}"
    is-small="${isSmall}"
  >
`;
export const TwoUp = TemplateButtonTwoUp.bind({});
TwoUp.args = {
  'primaryTitle': 'The Primary Title',
  'primaryUrl': '#primary-button-two-up',
  'secondaryTitle': 'Secondary',
  'secondaryUrl': '#secondary-button-two-up',
  'isSmall': false
};
