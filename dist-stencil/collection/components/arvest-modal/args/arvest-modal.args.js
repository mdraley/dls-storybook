export default {
  'title': {
    description: 'Modal Title',
    control: 'text'
  },
  'size': {
    description: 'Small or Large modal',
    control: {
      type: 'radio',
      options: [
        'small',
        'large'
      ]
    }
  },
  'content': {
    description: 'What the modal displays',
    control: 'text'
  },
  'noscroll': {
    description: 'Defines if content beneath overlay can be scrolled',
    control: 'boolean'
  }
};
