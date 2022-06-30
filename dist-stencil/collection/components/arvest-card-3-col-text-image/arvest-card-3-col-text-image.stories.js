import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestCard3ColTextImageArgs from './args/arvest-card-3-col-text-image.args';
export default {
  title: `${ArvestGroup}/Cards: 3 column/Text and Image`,
  argTypes: Object.assign({}, arvestCard3ColTextImageArgs),
  parameters: {
    layout: 'fullscreen'
  }
};
const TemplateCard3ColTextImage = ({ mainheadline, imageone, altone, titleone, bodyone, linkone, imagetwo, alttwo, titletwo, bodytwo, linktwo, imagethree, altthree, titlethree, bodythree, linkthree, imagefour, altfour, titlefour, bodyfour, linkfour, ctalabel, ctalink }) => `
    <arvest-card-3-col-text-image
      mainheadline="${mainheadline}"
      imageone="${imageone}"
      altone="${altone}"
      titleone="${titleone}"
      bodyone="${bodyone}"
      linkone="${linkone}"
      imagetwo="${imagetwo}"
      alttwo="${alttwo}"
      titletwo="${titletwo}"
      bodytwo="${bodytwo}"
      linktwo="${linktwo}"
      imagethree="${imagethree}"
      altthree="${altthree}"
      titlethree="${titlethree}"
      bodythree="${bodythree}"
      linkthree="${linkthree}"
      imagefour="${imagefour}"
      altfour="${altfour}"
      titlefour="${titlefour}"
      bodyfour="${bodyfour}"
      linkfour="${linkfour}"
      ctalabel="${ctalabel}"
      ctalink="${ctalink}"
    ></arvest-card-3-col-text-image>
  `, args = {
  mainheadline: 'News and stories',
  imageone: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  altone: 'This is an image',
  titleone: 'Title one',
  bodyone: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linkone: '#',
  imagetwo: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  alttwo: 'This is an image',
  titletwo: 'Title two',
  bodytwo: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linktwo: '#',
  imagethree: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  altthree: 'This is an image',
  titlethree: 'Title three',
  bodythree: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linkthree: '#',
  imagefour: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  altfour: 'This is an image',
  titlefour: 'Title four',
  bodyfour: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linkfour: '#',
  ctalabel: 'Read More',
  ctalink: '#'
};
export const Card3ColTextImage = TemplateCard3ColTextImage.bind({});
Card3ColTextImage.args = Object.assign({}, args);
