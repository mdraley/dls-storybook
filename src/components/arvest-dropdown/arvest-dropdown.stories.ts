import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestDropdown from './args/arvest-dropdown.args';

export default {
  'title': `${ArvestGroup}/Form/Dropdown`,
  'argTypes': {
    ...arvestDropdown
  }
};

const TemplateDropdown = ({ identifier, label, options, width, scrollEnabled, disabled }) => `
  <arvest-dropdown
      identifier="${identifier}"
      label="${label}"
      options='${options}'
      width="${width}"
      scroll-enabled="${scrollEnabled ? 'true' : 'false'}"
      disabled="${disabled}"
  ></arvest-dropdown>
`;

export const Dropdown = TemplateDropdown.bind({});
Dropdown.args = {
  identifier: 'arvestDropdown',
  label: 'Category',
  options: '[' +
    '{"label":"Agriculture","value":"agriculture"},' +
    '{"label":"Animals","value":"animals"},' +
    '{"label":"Art & science","value":"art-science"},' +
    '{"label":"Colleges","value":"colleges"},' +
    '{"label":"Food","value":"food"},' +
    '{"label":"High school","value":"high-school"},' +
    '{"label":"Nature","value":"nature"},' +
    '{"label":"Pets","value":"pets"}' +
    ']',
  width: '240px',
  scrollEnabled: true,
  disabled: false
};
