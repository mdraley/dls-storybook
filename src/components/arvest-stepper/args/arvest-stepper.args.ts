import {getDefault, getDescription} from '../../../global/ts/globalDocs';

const webComponent = 'arvest-stepper';

const arvestStepperArgs = {
  stepTitles: {
    description: getDescription(
      webComponent,
      'stepTitles'
    ),
    defaultValue: getDefault(
      webComponent,
      'stepTitles'
    ),
    control: 'text'
  },
  stepUrls: {
    description: getDescription(
      webComponent,
      'stepUrls'
    ),
    defaultValue: getDefault(
      webComponent,
      'stepUrls'
    ),
    control: 'text'
  },
  stepStates: {
    description: getDescription(
      webComponent,
      'stepStates'
    ),
    defaultValue: getDefault(
      webComponent,
      'stepStates'
    ),
    control: 'text'
  }
};

export default arvestStepperArgs;
