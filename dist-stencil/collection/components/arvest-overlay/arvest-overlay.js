import { Component, Host, State, h, Prop, Watch, Event, Listen } from '@stencil/core';
import { MountStates } from '../../global/ts/enums';
export class ArvestOverlay {
  constructor() {
    this.animationTime = 200;
    /**
     * Transition to new mountState after {animationTime} milliseconds. Use for mounting -> mounted and unmounting -> unmounted transitions.
     * @param state
     */
    this.doAnimatedTransition = (state) => {
      setTimeout(() => {
        this.mountState = state;
      }, this.animationTime);
    };
  }
  /**
   * Listen for 'esc' keypress and close overlay if detected.
   * @param ev
   */
  handleKeyDown(ev) {
    if (this.visible && ev.key === 'Escape') {
      this.visible = false;
    }
  }
  /**
   * Handle changes to visible attribute to change mountState to enable in and out animations.
   * @param isVisible boolean
   */
  watchVisibleHandler(isVisible) {
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
  watchMountStateHandler(newState, oldState) {
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
  componentWillLoad() {
    if (this.visible) {
      document.body.dataset.overlayOpen = '1';
      this.mountState = MountStates.MOUNTED;
    }
    else {
      document.body.dataset.overlayOpen = '0';
      this.mountState = MountStates.UNMOUNTED;
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "arvest-overlay", "data-mountState": this.mountState },
        h("div", { class: "arvest-overlay--content" },
          h("slot", null)))));
  }
  static get is() { return "arvest-overlay"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arvest-overlay.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arvest-overlay.css"]
  }; }
  static get properties() { return {
    "visible": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set true to open the overlay and display contents. Set false to close overlay."
      },
      "attribute": "visible",
      "reflect": false
    },
    "noscroll": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "true",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, scrolling underneath the overlay is prevented."
      },
      "attribute": "noscroll",
      "reflect": false
    }
  }; }
  static get states() { return {
    "mountState": {}
  }; }
  static get events() { return [{
      "method": "overlayClosed",
      "name": "overlayClosed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the overlay is closed."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "overlayOpened",
      "name": "overlayOpened",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the overlay is opened."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "visible",
      "methodName": "watchVisibleHandler"
    }, {
      "propName": "mountState",
      "methodName": "watchMountStateHandler"
    }]; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeyDown",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
