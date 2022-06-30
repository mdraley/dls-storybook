import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-form-date-picker',

  arvestFormDatePickerArgs = {
    name: {
      description: getDescription(
        webcomponent,
        'name'
      ),
      control: 'text'
    },
    identifier: {
      description: getDescription(
        webcomponent,
        'identifier'
      ),
      control: 'text'
    },
    disabled: {
      description: getDescription(
        webcomponent,
        'disabled'
      ),
      control: 'boolean'
    },
    required: {
      description: getDescription(
        webcomponent,
        'required'
      ),
      control: 'boolean'
    },
    min: {
      description: getDescription(
        webcomponent,
        'min'
      ),
      control: 'text'
    },
    max: {
      description: getDescription(
        webcomponent,
        'max'
      ),
      control: 'text'
    },
    role: {
      description: getDescription(
        webcomponent,
        'role'
      ),
      control: 'text'
    },
    label: {
      description: getDescription(
        webcomponent,
        'label'
      ),
      control: 'text'
    },
    placeholder: {
      description: getDescription(
        webcomponent,
        'placeholder'
      ),
      control: 'text'
    },
    value: {
      description: getDescription(
        webcomponent,
        'value'
      ),
      control: 'text'
    }
  };

export default arvestFormDatePickerArgs;
