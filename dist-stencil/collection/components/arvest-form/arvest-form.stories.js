import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestFormArgs from './args/arvest-form.args';
export default {
  'title': `${ArvestGroup}/Form`,
  argTypes: Object.assign({}, arvestFormArgs)
};
const TemplateForm = ({ buttonText, action, method }) => `
    <arvest-form
    button-text="${buttonText}"
    action="${action}"
    method="${method}"
    >
        <arvest-form-textinput required="true" error="Please enter your name" label='Name' elemId='inputName1' ariaDescribedById='nameHelp' small='Write your name' placeholder="David" type='text'></arvest-form-textinput>
        <arvest-form-textinput label='Age' elemId='inputAge1' ariaDescribedById='ageHelp' small='Only numbers' placeholder="25" type='number'></arvest-form-textinput>
        <arvest-form-textinput label='Email' elemId='inputEmail1' ariaDescribedById='emailHelp' small='Warning: Small Text' placeholder="name@mail.com" type='email'></arvest-form-textinput>
        <arvest-form-textinput disabled="true" label='Password' elemId='inputPass1' ariaDescribedById='passHelp' small='Number, Text, Special Character' placeholder="12Example!" type='password'></arvest-form-textinput>
        </br> </br>
        <arvest-form-check label='Check me out' type='checkbox' name='checkForm'></arvest-form-check>
        <arvest-form-check label='Check me out' type='radio' name='checkForm'></arvest-form-check>
        <arvest-form-check disabled="true" label='Check me out' type='checkbox' name='checkForm' disabled></arvest-form-check>
        <arvest-form-check disabled="true" label='Check me out' type='radio' name='checkForm' disabled></arvest-form-check>
    </arvest-form>
`;
const args = {
  buttonText: 'Submit',
  action: undefined,
  method: 'post'
};
export const Form = TemplateForm.bind({});
Form.args = Object.assign({}, args);
