import { ArvestGroup } from '../../global/ts/storybookGrouping';
import argTypes from './args/arvest-form-autocomplete.args';

export default {
  'title': `${ArvestGroup}/Form`,
  argTypes
};

const Component = ({
  elemId,
  label,
  options,
  width,
  scrollEnabled,
  disabled,
  name,
  small,
  placeholder,
  required,
  autocomplete,
  value
}):string => `
  <arvest-form-autocomplete
    elemId="${elemId}"
    label="${label}"
    options="${options}"
    width="${width}"
    scrollEnabled="${scrollEnabled}"
    disabled="${disabled}"
    name="${name}"
    small="${small}"
    placeholder="${placeholder}"
    required="${required}"
    autocomplete="${autocomplete}"
    value="${value}"
  />
`;

const args = {
  elemId: 'autocomplete-identifier',
  label: 'Arvest Autocomplete',
  options: '[' +
    '{"label":"Agriculture","value":"agriculture"},' +
    '{"label":"Animals","value":"animals"},' +
    '{"label":"Art & Science","value":"art-science"},' +
    '{"label":"Colleges","value":"colleges"},' +
    '{"label":"Food","value":"food"},' +
    '{"label":"High School","value":"high-school"},' +
    '{"label":"Nature","value":"nature"},' +
    '{"label":"Pets","value":"pets"}' +
    ']',
  width: '360px',
  scrollEnabled: true,
  disabled: false,
  name: 'example-autocomplete',
  small: false,
  placeholder: 'Placeholder Text',
  required: false,
  autocomplete: 'on',
  value: 'Initial Value'
};

export const Autocomplete = Component.bind({});
Autocomplete.args = {
  ...args
};
