import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Primary Hero Carousel`
};
const TemplatePrimaryHeroCarousel = ({ slideOneLabel, slideOneSrc, slideOneHeadline, slideTwoLabel, slideTwoSrc, slideTwoHeadline, slideThreeLabel, slideThreeSrc, slideThreeHeadline, slideFourLabel, slideFourSrc, slideFourHeadline }) => `
  <arvest-primary-hero-carousel
    slides='[
      {
        "label": "${slideOneLabel}",
        "src": "${slideOneSrc}",
        "headline": "${slideOneHeadline}"},
      {
        "label": "${slideTwoLabel}",
        "src": "${slideTwoSrc}",
        "headline": "${slideTwoHeadline}"},
      {
        "label": "${slideThreeLabel}",
        "src": "${slideThreeSrc}",
        "headline": "${slideThreeHeadline}"},
      {
        "label": "${slideFourLabel}",
        "src": "${slideFourSrc}",
        "headline": "${slideFourHeadline}"}
      ]'
  ></arvest-primary-hero-carousel>
`;
export const PrimaryHeroCarousel = TemplatePrimaryHeroCarousel.bind({});
PrimaryHeroCarousel.args = {
  slideOneLabel: 'Credit Card',
  slideOneSrc: 'https://www.arvest.com/images/dls/2000x900/1.jpg',
  slideOneHeadline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  slideTwoLabel: 'Cool Blue Savings',
  slideTwoSrc: 'https://www.arvest.com/images/dls/2000x900/2.jpg',
  slideTwoHeadline: 'Nostrum porro eveniet, accusamus quam suscipit aspernatur ad molestias.',
  slideThreeLabel: 'Business Loans',
  slideThreeSrc: 'https://www.arvest.com/images/dls/2000x900/3.jpg',
  slideThreeHeadline: 'Pariatur placeat, earum excepturi adipisci deserunt fugit laudantium.',
  slideFourLabel: 'Zelle',
  slideFourSrc: 'https://www.arvest.com/images/dls/2000x900/4.jpg',
  slideFourHeadline: 'Consequuntur in temporibus quibusdam. Soluta.'
};
