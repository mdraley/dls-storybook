import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestTypographyArgs from './args/arvest-typography.args';

export default {
  'title': `${ArvestGroup}/Typography`,
  'argTypes': {
    ...arvestTypographyArgs
  }
};

const TemplateTypography = ({ variant, text }) => `
    <arvest-typography variant="${variant}">${text}</arvest-typography>
`,
  args = {
    'variant': 'body1',
    'text': 'Typography Example'
  };

export const Typography = TemplateTypography.bind({});
Typography.args = {
  ...args
};
