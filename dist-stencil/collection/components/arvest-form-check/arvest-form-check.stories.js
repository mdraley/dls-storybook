import { ArvestGroup } from '../../global/ts/storybookGrouping';
export default {
  'title': `${ArvestGroup}/Form/Multi Checks`
};
export const MultiChecks = () => `
    <arvest-form>
        <h4>Single Checks</h4>

        <div class='form-check'>
            <arvest-form-check label='Check me out' type='checkbox' name='checkForm'></arvest-form-check>
        </div>

        <div class='form-check'>
            <arvest-form-check label='Check me out' type='radio' name='checkForm'></arvest-form-check>
        </div>

        <div class='form-check'>
            <arvest-form-check label='Check me out' type='checkbox' name='checkForm' disabled></arvest-form-check>
        </div>

        <div class='form-check'>
            <arvest-form-check label='Check me out' type='radio' name='checkForm' disabled></arvest-form-check>
        </div>


      <h4>Radio - Multi</h4>
      <arvest-form-check options='[{"value":"a","label":"Option A"},{"value":"b","label":"Option B"},{"value":"c","label":"Option C"},{"value":"d","label":"Option D","disabled":"true"}]' type='radio' name='radioForm'></arvest-form-check>

      <h4>Checkbox - Multi</h4>
      <arvest-form-check options='[{"value":"a","label":"Option A"},{"value":"b","label":"Option B"},{"value":"c","label":"Option C"},{"value":"d","label":"Option D","disabled":"true"}]' type='checkbox' name='checkboxForm'></arvest-form-check>

    </arvest-form>
`;
