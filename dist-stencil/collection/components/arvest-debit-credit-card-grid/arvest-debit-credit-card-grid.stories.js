import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  title: `${ArvestGroup}/Debit & Credit Card`
};
export const DebitCreditCardGrid = () => `
    <arvest-debit-credit-card-grid></arvest-debit-credit-card-grid>
`;
DebitCreditCardGrid.argTypes = {
  cardData: { description: 'Data Array to render Cards with.' }
};
