import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  'tag': 'arvest-media',
  'styleUrl': 'arvest-media.css',
  'shadow': true
})

export class ArvestMedia {

    @Prop() src = 'https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg';

    @Prop() alt = 'Alt text for the image';

    @Prop() heading = 'Media heading';

    @Prop() bodytext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim suscipit risus sit amet hendrerit. Nunc efficitur mi massa, at eleifend lacus aliquet id. Aliquam venenatis nunc id sodales dapibus. Sed in consectetur lacus, in consectetur quam.'

    render () {

      return (
        <Host>
          <div class="media">
            <img src={this.src} class="mr-3" alt={this.alt} />
            <div class="media-body">
              <h5 class="mt-0">{this.heading}</h5>
              <p>{this.bodytext}</p>
            </div>
          </div>
        </Host>
      );
    }
}
