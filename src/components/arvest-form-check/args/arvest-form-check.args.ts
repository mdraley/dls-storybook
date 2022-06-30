import { getDescription } from '../../../global/ts/globalDocs';
import { FormCheckboxType } from '../../../global/ts/enums'

const webcomponent = 'arvest-form-check',
  arvestFormCheckArgs = {
    label: {
      description: getDescription(
        webcomponent,
        'label'
      ),
      control: 'text'
    },
    name: {
      description: getDescription(
        webcomponent,
        'name'
      ),
      control: 'text'
    },
    ariaDescribedBy: {
      description: getDescription(
        webcomponent,
        'ariaDescribedBy'
      ),
      control: 'text'
    },
    type: {
      description: getDescription(
        webcomponent,
        'type'
      ),
      control: 'select',
      options: [
        FormCheckboxType.checkbox,
        FormCheckboxType.radio
      ]
    },
    value: {
      description: getDescription(
        webcomponent,
        'value'
      ),
      control: 'text'
    },
    disabled: {
      description: getDescription(
        webcomponent,
        'disabled'
      ),
      control: 'boolean'
    }
  };

export default arvestFormCheckArgs;
