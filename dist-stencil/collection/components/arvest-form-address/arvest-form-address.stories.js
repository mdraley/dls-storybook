import { ArvestGroup } from '../../global/ts/storybookGrouping';
import argTypes from './args/arvest-form-address.args';
export default {
  'title': `${ArvestGroup}/Form`,
  argTypes
};
const Component = ({ includeTerritories, stateAbbr, apiKey, street, city, zip, unit }) => `
  <div style="max-width: 95%">
    <arvest-form-address 
      ${includeTerritories ? 'include-territories' : ''}
      state-abbr="${stateAbbr}"
      api-key="${apiKey}"
      street="${street}"
      city="${city}"
      zip="${zip}"
      unit="${unit}"
    />
  </div>
`;
const args = {
  includeTerritories: false,
  stateAbbr: '',
  apiKey: 'AIzaSyDjH9vSClGo1pB9UFWMsJsxKjKJYLVAE3Q',
  street: '',
  city: '',
  zip: '',
  unit: ''
};
export const AddressForm = Component.bind({});
AddressForm.args = Object.assign({}, args);
