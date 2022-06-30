import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestModal {
  /** Title at the top of the modal  **/
  heading: string;
  /** Modal size (small, large) **/
  size: string;
  /**
   * Event emitted when the close button on the modal is clicked.
   */
  clickClose: EventEmitter<MouseEvent>;
  onClickCloseHandler(e: MouseEvent): void;
  render(): string;
}
