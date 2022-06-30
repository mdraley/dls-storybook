import { ArvestGroup } from '../../global/ts/storybookGrouping';
import cardArgs from './args/arvest-card-4-col-text-glyph.args';

export default {
  title: `${ArvestGroup}/Cards: 4 column/Text and Glyph`,
  argTypes: {
    ...cardArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const TemplateCard4ColTextGlyph = ({
  mainheadline,

  altone,
  titleone,
  bodyone,
  linkone,

  alttwo,
  titletwo,
  bodytwo,
  linktwo,

  altthree,
  titlethree,
  bodythree,
  linkthree
}) => `
    <arvest-card-4-col-text-glyph
    mainheadline="${mainheadline}"

    altone="${altone}"
    titleone="${titleone}"
    bodyone="${bodyone}"
    linkone="${linkone}"

    alttwo="${alttwo}"
    titletwo="${titletwo}"
    bodytwo="${bodytwo}"
    linktwo="${linktwo}"

    altthree="${altthree}"
    titlethree="${titlethree}"
    bodythree="${bodythree}"
    linkthree="${linkthree}"
    ></arvest-card-4-col-text-glyph>
  `,

  args = {
    mainheadline: 'Helpful resources',

    altone: 'This icon needs a description',
    titleone: 'Card one title',
    bodyone:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    linkone: '#',

    alttwo: 'This icon needs a description',
    titletwo: 'Card two title',
    bodytwo:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    linktwo: '#',

    altthree: 'This icon needs a description',
    titlethree: 'Card three title',
    bodythree:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    linkthree: '#'
  };

export const Card4ColTextGlyph = TemplateCard4ColTextGlyph.bind({});
Card4ColTextGlyph.args = {
  ...args
};
