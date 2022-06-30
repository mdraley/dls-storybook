import { ArvestGroup } from '../../global/ts/storybookGrouping';
import cardArgs from './args/arvest-card-4-col-text-image.args';
export default {
  title: `${ArvestGroup}/Cards: 4 column/Text and Image`,
  argTypes: Object.assign({}, cardArgs),
  parameters: {
    layout: 'fullscreen'
  }
};
const TemplateCard4ColTextImage = ({ mainheadline, imageone, altone, titleone, bodyone, linkone, imagetwo, alttwo, titletwo, bodytwo, linktwo, imagethree, altthree, titlethree, bodythree, linkthree, ctalabel, ctalink }) => `
    <arvest-card-4-col-text-image
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

    ctalabel="${ctalabel}"
    ctalink="${ctalink}"
    ></arvest-card-4-col-text-image>
  `, args = {
  mainheadline: 'News and stories',
  imageone: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  altone: 'This is an image',
  titleone: 'Title one',
  bodyone: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linkone: '#',
  imagetwo: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  alttwo: 'This is an image',
  titletwo: 'Title one',
  bodytwo: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linktwo: '#',
  imagethree: 'https://www.arvest.com/images/dls/500x315/1.jpg',
  altthree: 'This is an image',
  titlethree: 'Title one',
  bodythree: 'Lorem ipsum dolor sit amet, elit ut, purus sit amet luctus vene natis ...',
  linkthree: '#',
  ctalabel: 'Read more',
  ctalink: '#'
};
export const Card4ColTextImage = TemplateCard4ColTextImage.bind({});
Card4ColTextImage.args = Object.assign({}, args);
