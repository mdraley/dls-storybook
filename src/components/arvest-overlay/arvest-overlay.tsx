import { Component, Host, State, h, Prop, Watch, Event, EventEmitter, Listen, FunctionalComponent } from '@stencil/core';
import { MountStates } from '../../global/ts/enums';

@Component({
  tag: 'arvest-overlay',
  styleUrl: 'arvest-overlay.css',
  shadow: true
})
export class ArvestOverlay {
  animationTime = 200;

  /**
   * Transition to new mountState after {animationTime} milliseconds. Use for mounting -> mounted and unmounting -> unmounted transitions.
   * @param state
   */
  doAnimatedTransition = (state: string):void => {
    setTimeout(() => {
      this.mountState = state;
    }, this.animationTime);
  }

  /**
   * Set true to open the overlay and display contents. Set false to close overlay.
   */
  @Prop({mutable: true}) visible: boolean;

  /**
   * If true, scrolling underneath the overlay is prevented.
   */
  @Prop() noscroll: true;

  @State() mountState: string;

  /**
   * Event emitted when the overlay is closed.
   */
  @Event({
    eventName: 'overlayClosed',
    bubbles: true
  }) overlayClosed: EventEmitter<void>;

  /**
   * Event emitted when the overlay is opened.
   */
  @Event({
    eventName: 'overlayOpened',
    bubbles: true
  }) overlayOpened: EventEmitter<void>;

  /**
   * Listen for 'esc' keypress and close overlay if detected.
   * @param ev 
   */
  @Listen('keydown', { target: 'document' })
  public handleKeyDown(ev: KeyboardEvent): void {
    if (this.visible && ev.key === 'Escape') {
      this.visible = false;
    }
  }

  /**
   * Handle changes to visible attribute to change mountState to enable in and out animations.
   * @param isVisible boolean
   */
  @Watch('visible')
  watchVisibleHandler(isVisible: boolean):void {
    if (isVisible && this.mountState === MountStates.UNMOUNTED) {
      this.mountState = MountStates.MOUNTING;
      this.doAnimatedTransition(MountStates.MOUNTED);
    }
    if (!isVisible && this.mountState === MountStates.MOUNTED) {
      this.mountState = MountStates.UNMOUNTING;
      this.doAnimatedTransition(MountStates.UNMOUNTED);
    }
  }

  /**
   * Emit open and closed events just in case that's useful for an implementing application.
   * @param newState string
   * @param oldState string
   */
  @Watch('mountState')
  watchMountStateHandler(newState: string, oldState: string):void {
    if (oldState && newState === MountStates.UNMOUNTED) {
      if (this.noscroll) {
        document.body.dataset.overlayOpen = '0';
      }
      this.overlayClosed.emit();
    }
    if (oldState && newState === MountStates.MOUNTED) {
      if (this.noscroll) {
        document.body.dataset.overlayOpen = '1';
      }
      this.overlayOpened.emit();
    }
  }

  componentWillLoad():void {
    if (this.visible) {
      document.body.dataset.overlayOpen = '1';
      this.mountState = MountStates.MOUNTED;
    } else {
      document.body.dataset.overlayOpen = '0';
      this.mountState = MountStates.UNMOUNTED;
    }
  }

  render():FunctionalComponent {
    return (
      <Host>
        <div class="arvest-overlay" data-mountState={this.mountState}>
          <div class="arvest-overlay--content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
