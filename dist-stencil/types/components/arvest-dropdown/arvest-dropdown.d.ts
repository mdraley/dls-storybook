import { FunctionalComponent, EventEmitter } from '../../stencil-public-runtime';
import { IFormDropdownOption } from '../../global/ts/interfaces';
export declare class ArvestDropdown {
  el: HTMLElement;
  /** ID for the dropdown **/
  identifier: string;
  /** Dropdown label text */
  label: string;
  /** Dropdown options '[{label: string, value: string, selected?: boolean}]' **/
  options?: string;
  /** Set the width of the dropdown. Can be any valid value for the width CSS property. **/
  width: string;
  /** Enable fixed-height, scrollable dropdown **/
  scrollEnabled: boolean;
  /** Disable dropdown */
  disabled: string;
  show: boolean;
  selected: IFormDropdownOption;
  isDisabled: boolean;
  /**
   * Event emitted when an options is chosen from the dropdown. Data payload is an object: { label: string, value: string }.
   */
  dropdownSelectValue: EventEmitter<IFormDropdownOption>;
  handleClick(ev: MouseEvent): void;
  handleKeyDown(ev: KeyboardEvent): void;
  handleDropdownSelectValue(e: CustomEvent): void;
  private clickToggle;
  private handleOptionSelect;
  private handleTriggerKeyDown;
  componentWillLoad(): void;
  handleClickOnDropdown(e: MouseEvent): void;
  render(): FunctionalComponent;
}
