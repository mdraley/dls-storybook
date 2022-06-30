import { EventEmitter, FunctionalComponent } from '../../stencil-public-runtime';
export declare class ArvestOverlay {
  animationTime: number;
  /**
   * Transition to new mountState after {animationTime} milliseconds. Use for mounting -> mounted and unmounting -> unmounted transitions.
   * @param state
   */
  doAnimatedTransition: (state: string) => void;
  /**
   * Set true to open the overlay and display contents. Set false to close overlay.
   */
  visible: boolean;
  /**
   * If true, scrolling underneath the overlay is prevented.
   */
  noscroll: true;
  mountState: string;
  /**
   * Event emitted when the overlay is closed.
   */
  overlayClosed: EventEmitter<void>;
  /**
   * Event emitted when the overlay is opened.
   */
  overlayOpened: EventEmitter<void>;
  /**
   * Listen for 'esc' keypress and close overlay if detected.
   * @param ev
   */
  handleKeyDown(ev: KeyboardEvent): void;
  /**
   * Handle changes to visible attribute to change mountState to enable in and out animations.
   * @param isVisible boolean
   */
  watchVisibleHandler(isVisible: boolean): void;
  /**
   * Emit open and closed events just in case that's useful for an implementing application.
   * @param newState string
   * @param oldState string
   */
  watchMountStateHandler(newState: string, oldState: string): void;
  componentWillLoad(): void;
  render(): FunctionalComponent;
}
