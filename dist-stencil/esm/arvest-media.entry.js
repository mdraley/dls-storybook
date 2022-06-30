import { r as registerInstance, h, H as Host } from './index-66c1549d.js';

const arvestMediaCss = ":host{display:block;width:100%}img{margin-right:16px}p{margin-top:0;margin-bottom:1rem}h5{font-size:1.25rem}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.mt-0{margin-top:0}";

const ArvestMedia = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = 'https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg';
    this.alt = 'Alt text for the image';
    this.heading = 'Media heading';
    this.bodytext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim suscipit risus sit amet hendrerit. Nunc efficitur mi massa, at eleifend lacus aliquet id. Aliquam venenatis nunc id sodales dapibus. Sed in consectetur lacus, in consectetur quam.';
  }
  render() {
    return (h(Host, null, h("div", { class: "media" }, h("img", { src: this.src, class: "mr-3", alt: this.alt }), h("div", { class: "media-body" }, h("h5", { class: "mt-0" }, this.heading), h("p", null, this.bodytext)))));
  }
};
ArvestMedia.style = arvestMediaCss;

export { ArvestMedia as arvest_media };
