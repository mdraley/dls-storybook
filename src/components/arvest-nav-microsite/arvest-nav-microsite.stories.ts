import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Microsite Nav`,
  parameters: {
    layout: 'fullscreen'
  }
};

// eslint-disable-next-line no-empty-pattern
const TemplateMicrositeNav = ({ }) => `
  <arvest-nav-microsite />
`;

export const MicrositeNav = TemplateMicrositeNav.bind({});
MicrositeNav.args = {};
