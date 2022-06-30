import { ArvestGroup } from '../../global/ts/storybookGrouping';
import cardArgs from './args/arvest-card-4-col-text-img-cta.args';

export default {
  title: `${ArvestGroup}/Cards: 4 column/Text, Image and CTA`,
  argTypes: {
    ...cardArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const TemplateCard4ColTextImageCta = ({
  mainheadline,

  imageone,
  altone,
  titleone,
  bodyone,
  ctaone,
  linkone,

  imagetwo,
  alttwo,
  titletwo,
  bodytwo,
  ctatwo,
  linktwo,

  imagethree,
  altthree,
  titlethree,
  bodythree,
  ctathree,
  linkthree

}) => `
    <arvest-card-4-col-text-img-cta
    mainheadline="${mainheadline}"

    imageone="${imageone}"
    altone="${altone}"
    titleone="${titleone}"
    bodyone="${bodyone}"
    ctaone="${ctaone}"
    linkone="${linkone}"

    imagetwo="${imagetwo}"
    alttwo="${alttwo}"
    titletwo="${titletwo}"
    bodytwo="${bodytwo}"
    ctatwo="${ctatwo}"
    linktwo="${linktwo}"

    imagethree="${imagethree}"
    altthree="${altthree}"
    titlethree="${titlethree}"
    bodythree="${bodythree}"
    ctathree="${ctathree}"
    linkthree="${linkthree}"

    ></arvest-card-4-col-text-img-cta>
  `,

  args = {
    mainheadline: 'News and stories',
    imageone: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    altone: 'This is an image',
    titleone: 'Title one',
    bodyone:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    ctaone: 'Apply now',
    linkone: '#',

    imagetwo: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    alttwo: 'This is an image',
    titletwo: 'Title one',
    bodytwo:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    ctatwo: 'Apply now',
    linktwo: '#',

    imagethree: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    altthree: 'This is an image',
    titlethree: 'Title one',
    bodythree:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis',
    ctathree: 'Apply now',
    linkthree: '#'
  };

export const Card4ColTextImageCTA = TemplateCard4ColTextImageCta.bind({});
Card4ColTextImageCTA.args = {
  ...args
};
