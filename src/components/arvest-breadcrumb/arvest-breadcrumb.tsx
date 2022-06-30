import {Component, Host, Prop, State, h, FunctionalComponent} from '@stencil/core';

@Component({
  'tag': 'arvest-breadcrumb',
  'styleUrl': 'arvest-breadcrumb.css',
  'shadow': true
})

export class ArvestBreadcrumb {

  /**
   * Links is an array of routes, it has the following structure: [{"title":"string label","url":"string url"},]
   */
  @Prop() links: string;

  @State() _links: Array<any>;

  @State() collapsed = true;

  private arrayDataWatcher (links) {
    if (typeof links === 'string') {
      this._links = JSON.parse(links);
    } else {
      this._links = links;
    }
  }

  private renderLinks (link, index): JSX.IntrinsicElements | null {
    // Handle more than five links (all but the last) (collapsed)
    if (this._links.length > 5 && index < this._links.length - 1) {
      if (this.collapsed && index === 1) {
        return (
          <li class="breadcrumb-item" >
            {/* eslint-disable-next-line no-script-url */}
            <a class="ellipsis" href="javascript:void(0)" onClick={() => {
              this.collapsed = false;
            }}>
              ...
            </a>
          </li>
        );
      } else if (this.collapsed && (index === 0 || index === this._links.length - 2)) {
        return (
          <li class="breadcrumb-item" >
            <a href={link.url}>
              {link.title}
            </a>
          </li>
        );
      } else if (!this.collapsed) {
        return (
          <li class="breadcrumb-item" >
            <a href={link.url}>
              {link.title}
            </a>
          </li>
        );
      }

      return null;
    }

    // Handle less than 5 links (all but the last)
    if (this._links.length <= 5 && index < this._links.length - 1) {
      return (
        <li class="breadcrumb-item" >
          <a href={link.url}>
            {link.title}
          </a>
        </li>
      );
    }

    // Handle the last link
    return (
      <li class="breadcrumb-item active" aria-current="page" >
        {link.title}
      </li>
    );
  }

  componentWillLoad (): void {
    this.arrayDataWatcher(this.links);
  }

  render (): FunctionalComponent {
    return (
      <Host>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            {
              this._links.map((link, index) => this.renderLinks(
                link,
                index
              ))
            }
          </ol>
        </nav>
      </Host>
    );
  }
}
