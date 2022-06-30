import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Nav`,
  parameters: {
    layout: 'fullscreen'
  }
};

const TemplateNav = ({ searchbarlinks }) => `
    <arvest-nav searchbarlinks='${searchbarlinks}'></arvest-nav>
`;

export const Nav = TemplateNav.bind({});
Nav.args = {
  searchbarlinks: `[
        {"label":"Find my routing number", "href":"https://arvest.com"},
        {"label":"Apply for a loan", "href":"https://arvest.com"},
        {"label":"Open an account", "href":"https://arvest.com"},
        {"label":"Order / reorder checks", "href":"https://arvest.com"}
]`
};
