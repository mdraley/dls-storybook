import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestBreadcrumb {
  /**
   * Links is an array of routes, it has the following structure: [{"title":"string label","url":"string url"},]
   */
  links: string;
  _links: Array<any>;
  collapsed: boolean;
  private arrayDataWatcher;
  private renderLinks;
  componentWillLoad(): void;
  render(): FunctionalComponent;
}
