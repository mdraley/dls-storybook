import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'arvest-grid',
  styleUrl: 'arvest-grid.css',
  shadow: true
})

export class ArvestGrid {
  children?: Node[];

  @Element() host : HTMLElement;

  private makeContainer = (child) => <div innerHTML={child.outerHTML}></div>

  private renderChildren = (children: Node[], renderFun) => children.map((child) => renderFun(child));

  componentWillLoad () {
    console.log(
      'Child Nodes',
      Array.from(this.host.childNodes)
    );  
    this.children = Array.from(this.host.childNodes);
    this.host.innerHTML = '';
    console.log(this.children);
  }

  render () {

    return (
      <Host>
          
        {this.renderChildren(
          this.children,
          this.makeContainer
        )}
        
      </Host>
    );
  }
}
