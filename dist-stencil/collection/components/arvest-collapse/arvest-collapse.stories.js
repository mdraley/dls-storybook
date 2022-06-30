import { ComponentsGroup } from '../../global/ts/storybookGrouping';
export default {
  'title': `${ComponentsGroup}/Collapse`
};
export const Collapse = () => `
        <arvest-collapse>
            <details>
                <summary>Item One</summary>
                Item description area. This is where the description or information would go in the collapse component.
            </details>
            <details>
                <summary>Item Two</summary>
                Item description area. This is where the description or information would go in the collapse component.
            </details>
            <details>
                <summary>Item Three</summary>
                Item description area. This is where the description or information would go in the collapse component.
            </details>
        </arvest-collapse>
        `;
