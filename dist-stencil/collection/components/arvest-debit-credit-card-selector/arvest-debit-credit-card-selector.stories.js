import arvestDebitCreditCardSelectorArgs from './args/arvest-debit-credit-card-selector.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Debit & Credit Card`,
  argTypes: Object.assign({}, arvestDebitCreditCardSelectorArgs)
};
const TemplateDebitCreditCardSelector = ({ linkcta, label, selectButton, showLink, showLabel, showButton, bgimage }) => `
  <div style="width: 465px; height: 407.19px; position: relative;">
    <arvest-debit-credit-card-selector
        linkcta="${linkcta}"
        label="${label}"
        selectButton="${selectButton}"
        ${showLink ? 'show-link' : ''}
        ${showLabel ? 'show-label' : ''}
        ${showButton ? 'show-button' : ''}
        bgimage="${bgimage}"
    >
    </arvest-debit-credit-card-selector>
  </div>
`, args = {
  linkcta: 'Subject name',
  label: 'Card design name',
  selectButton: 'Select',
  showLink: true,
  showLabel: true,
  showButton: true,
  bgimage: '/assets/images/mississippi_river.png'
};
export const DebitCreditCardSelector = TemplateDebitCreditCardSelector.bind({});
DebitCreditCardSelector.args = Object.assign({}, args);
