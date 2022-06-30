import { Component, Element, Host, Prop, h } from '@stencil/core';
import { Color } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-list',
  'styleUrl': 'arvest-list.css',
  'shadow': true
})

export class ArvestList {

    /** Index number for active element */
    @Prop() activetag?: string;

    /** Index number for disabled element */
    @Prop() disabledtag?: string;

    /** Color for all elements */
    @Prop() color?: Color;

    children?: Element[];

    @Element() host?: HTMLDivElement;

    componentWillLoad () {
      this.children = Array.from(this.host.children);
      this.host.innerHTML = '';
    }

    render () {

      return (
        <Host>
          <ul class="list-group">
            {this.children.map((child, index) => <li class={`list-group-item
                        ${index === parseInt(this.activetag) && 'active'}
                        ${index === parseInt(this.disabledtag) && 'disabled'}
                        list-group-item-${this.color}
                    `}
            innerHTML={child.outerHTML} />)}
          </ul>
        </Host>
      );
    }
}
