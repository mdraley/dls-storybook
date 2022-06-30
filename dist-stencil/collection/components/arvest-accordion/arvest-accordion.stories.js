import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Accordion`,
  parameters: {
    layout: 'padded'
  }
};
export const AccordionTableSimple = () => `
  <arvest-accordion type="table-simple" accordiontitle="Accordion Table Simple Title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc elit. In hac habitasse
    platea dictumst. Nunc bibendum dignissim diam, non tempor ligula varius id. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Suspendisse at nunc elit. In hac habitasse platea dictumst.
  </arvest-accordion>
`;
AccordionTableSimple.argTypes = {
  type: { description: 'Type' },
  accordiontitle: { description: 'Title' }
};
export const AccordionContentSimple = () => `
  <arvest-accordion type="content" accordiontitle="Accordion Content Simple Title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc elit. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </arvest-accordion>
`;
AccordionContentSimple.argTypes = {
  type: { description: 'Type' },
  accordiontitle: { description: 'Title' }
};
