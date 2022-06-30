import { getDescription } from '../../../global/ts/globalDocs';

const webcomponent = 'arvest-form',

arvestFormArgs = {
    buttonText: {
        description: getDescription(
            webcomponent,
            'buttonText'
        ),
        control: 'text'
    },
    action: {
        description: getDescription(
            webcomponent,
            'action'
        ),
        control: 'text'
    },
    method: {
        description: getDescription(
            webcomponent,
            'method'
        ),
        control: 'text'
    }
}

export default arvestFormArgs;
