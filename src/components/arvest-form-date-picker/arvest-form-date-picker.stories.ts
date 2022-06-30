import arvestFormDatePickerArgs from './args/arvest-form-date-picker.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Form/Date Picker`,
  argTypes: {
    ...arvestFormDatePickerArgs
  }
};

const TemplateDatePicker = ({
  name,
  identifier,
  disabled,
  required,
  min,
  max,
  role,
  label,
  placeholder,
  value
}) => `
    <arvest-form-date-picker
        name="${name}"
        identifier="${identifier}"
        disabled="${disabled}"
        required="${required}"
        min="${min}"
        max="${max}"
        role="${role}"
        label="${label}"
        placeholder="${placeholder}"
        value="${value}"
    ></arvest-form-date-picker>
`;

const args = {
  name: 'arvest-date-picker',
  identifier: 'arvest-date-picker-01',
  disabled: false,
  required: false,
  min: '1900-01-01',
  max: undefined,
  role: undefined,
  label: 'Choose a date',
  placeholder: 'mm/dd/yyyy',
  value: undefined
};

export const DatePicker = TemplateDatePicker.bind({});
DatePicker.args = {
  ...args
};
