import { ArvestGroup } from '../../global/ts/storybookGrouping';
import cardFullwidthProductFeaturesArgs from './args/arvest-card-fullwidth-product-features.args';
export default {
  title: `${ArvestGroup}/Cards: Fullwidth`,
  argTypes: Object.assign({}, cardFullwidthProductFeaturesArgs),
  parameters: {
    layout: 'centered'
  }
};
const TemplateCardFullwidthProductFeatures = ({ identifier, cardTitle, description, listDescription, listItems, icons, iconTips, primaryCtaTitle, primaryCtaUrl, secondaryCtaTitle, secondaryCtaUrl }) => `
    <arvest-card-fullwidth-product-features
      identifier="${identifier}"
      card-title="${cardTitle}"
      description="${description}"
      list-description="${listDescription}"
      list-items="${listItems}"
      icons="${icons}"
      icon-tips="${iconTips}"
      primary-cta-title="${primaryCtaTitle}"
      primary-cta-url="${primaryCtaUrl}"
      secondary-cta-title="${secondaryCtaTitle}"
      secondary-cta-url="${secondaryCtaUrl}"
    ></arvest-card-fullwidth-product-features>
  `, args = {
  identifier: 'arvest-fullwidth-cta-icon-id',
  cardTitle: 'Free Blue™',
  description: 'Our most popular account comes with unlimited check writing, a free debit card with custom design and up to $400 in overdraft coverage.',
  listDescription: '',
  listItems: 'Free custom debit card|Overdraft protection up to $400|No monthly fee if enrolled in eStatements',
  icons: 'lock-regular|lock-regular|lock-regular|lock-regular|lock-regular|lock-regular|lock-regular|lock-regular',
  iconTips: 'Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.|Lorem ipsum dolor set.',
  primaryCtaTitle: 'Apply now',
  primaryCtaUrl: '#',
  secondaryCtaTitle: 'Get info',
  secondaryCtaUrl: '#'
};
export const ProductFeatures = TemplateCardFullwidthProductFeatures.bind({});
ProductFeatures.args = Object.assign({}, args);
