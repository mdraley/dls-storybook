import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestStepperArgs from './args/arvest-stepper.args';

export default {
  'title': `${ArvestGroup}/Stepper`,
  'argTypes': {
    ...arvestStepperArgs
  }
};

const TemplateStepper = ({ stepTitles, stepUrls, stepStates }) => `
  <arvest-stepper
    step-titles="${stepTitles}"
    step-urls="${stepUrls}"
    step-states="${stepStates}"
  >
  </arvest-stepper>
`;

export const Stepper = TemplateStepper.bind({});

Stepper.args = {
  stepTitles: 'Long Step 1 Title,Step 2,Step 3,Step 4,Step 5',
  stepUrls: '#step-1,#step-2,#step-3,#step-4,#step-5',
  stepStates: 'complete,complete,complete,active,incomplete'
};
