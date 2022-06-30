import { FunctionalComponent, EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestSearchbar {
  el: HTMLElement;
  /**
   * Array of links as json string.
   */
  links: string;
  linksHandler(newValue: string): void;
  isMobile: boolean;
  _links: Array<any>;
  isTakeover: boolean;
  isReverse: boolean;
  isMouseOver: boolean;
  showLinks: boolean;
  searchValue: string;
  isFocused: boolean;
  /**
   * Event emitted when the value entered into search changes. Contains search string.
   */
  searchValueChange: EventEmitter<string>;
  componentWillLoad(): void;
  private handleInputChange;
  private handleBackKeyDown;
  private handleInputKeyDown;
  private arrayDataWatcher;
  private setMouseOn;
  private setMouseOff;
  private setTakeoverOn;
  private setTakeoverOff;
  private setReverseStylesOn;
  private setReverseStylesOff;
  componentDidRender(): void;
  render(): FunctionalComponent;
}
