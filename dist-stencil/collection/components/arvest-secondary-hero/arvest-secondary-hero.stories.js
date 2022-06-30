import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Secondary Hero`
};
const TemplateSecondaryHero = ({ header }) => `
<arvest-secondary-hero header="${header}"></arvest-secondary-hero>
`;
export const SecondaryHero = TemplateSecondaryHero.bind({});
SecondaryHero.args = {
  header: 'Lorem ipsum,dolor sit.'
};
