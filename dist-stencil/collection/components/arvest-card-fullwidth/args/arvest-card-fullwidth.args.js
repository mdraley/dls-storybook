import { getDescription } from '../../../global/ts/globalDocs';
const webcomponent = 'arvest-card-fullwidth', arvestCardFullWidthArgs = {
  showheadline: {
    description: getDescription(webcomponent, 'showheadline'),
    control: {
      type: 'boolean'
    }
  },
  showbody: {
    description: getDescription(webcomponent, 'showbody'),
    control: {
      type: 'boolean'
    }
  },
  showcta: {
    description: getDescription(webcomponent, 'showcta'),
    control: {
      type: 'boolean'
    }
  }
};
export default arvestCardFullWidthArgs;
