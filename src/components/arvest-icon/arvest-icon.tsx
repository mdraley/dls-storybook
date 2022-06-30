import { Component, Host, h, FunctionalComponent, Prop, State } from '@stencil/core';
import { getIcon } from './utils';
import { IIcon } from './iconList';

@Component({
  tag: 'arvest-icon',
  assetsDirs: ['assets'],
  styleUrl: 'arvest-icon.css',
  shadow: true
})

export class ArvestIcon {
  @Prop() icon: string;

  @Prop() label?: string;

  @Prop() alt?: string;

  @State() private iconData: IIcon;

  async componentWillLoad (): Promise<void> {
    this.iconData = await getIcon(this.icon);
  }

  render (): FunctionalComponent {
    return (
      <Host>
        <img
          src={this.iconData.icon}
          alt={this.alt ? this.alt : this.iconData.alt}
          aria-label={this.label ?? this.label}
        />
      </Host>
    );
  }
}
