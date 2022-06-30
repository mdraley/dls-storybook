import card3ColTextImgCtaArgs from './args/arvest-card-3-col-text-img-cta.args';
import { ArvestGroup } from '../../global/ts/storybookGrouping';

export default {
  title: `${ArvestGroup}/Cards: 3 column/Text, Image and CTA`,
  argTypes: {
    ...card3ColTextImgCtaArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template3ColTextImgCta = ({
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
  linkthree,
  imagefour,
  altfour,
  titlefour,
  bodyfour,
  ctafour,
  linkfour
}) => `
    <arvest-card-3-col-text-img-cta
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
      imagefour="${imagefour}"
      altfour="${altfour}"
      titlefour="${titlefour}"
      bodyfour="${bodyfour}"
      ctafour="${ctafour}"
      linkfour="${linkfour}"
    ></arvest-card-3-col-text-img-cta>
  `,
  args = {
    mainheadline: 'News and stories',
    imageone: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    altone: 'This is an image',
    titleone: 'Title one',
    bodyone:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.',
    ctaone: 'Learn more',
    linkone: '#',
    imagetwo: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    alttwo: 'This is an image',
    titletwo: 'Title two',
    bodytwo:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.',
    ctatwo: 'Learn more',
    linktwo: '#',
    imagethree: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    altthree: 'This is an image',
    titlethree: 'Title three',
    bodythree:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.',
    ctathree: 'Learn more',
    linkthree: '#',
    imagefour: 'https://www.arvest.com/images/dls/500x315/1.jpg',
    altfour: 'This is an image',
    titlefour: 'Title four',
    bodyfour:
      'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis.',
    ctafour: 'Learn more',
    linkfour: '#'
  };

export const Card3ColTextImageCTA = Template3ColTextImgCta.bind({});
Card3ColTextImageCTA.args = {
  ...args
};
