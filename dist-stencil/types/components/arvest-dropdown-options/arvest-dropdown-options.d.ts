import { EventEmitter } from '../../stencil-public-runtime';
import { IFormDropdownOption } from '../../global/ts/interfaces';
export declare class ArvestDropdownOptions {
  /**
   * Index of selected option.
   */
  selected: number | null;
  /**
   * Dropdown options as an array.
   */
  _options: IFormDropdownOption[];
  /**
   * Dropdown options as a string '[{label: string, value: string, selected?: boolean}]'
   */
  options?: string;
  /**
   * Set the width of the dropdown, can be any valid css value for the width property.
   */
  width: string;
  /**
   * Enable fixed-height, scrollable dropdown
   */
  scrollEnabled: boolean;
  /**
   * Unique identifier.
   */
  identifier: string;
  /**
   * Set true to open options.
   */
  open: boolean;
  /**
   * Emitted when a dropdown option is selected. Data payload contains selected option.
   */
  dropdownSelectValue: EventEmitter<IFormDropdownOption>;
  /**
   * Emitted when options are changed. Data payload contains array of new options.
   */
  optionsUpdated: EventEmitter<IFormDropdownOption[]>;
  setNavData(newValue: string): void;
  handleSelectionChange(selection: number): void;
  componentWillLoad(): void;
  /**
   * Handle choosing an option with keyboard.
   * @param ev KeyboardEvent
   * @param index Index of option.
   */
  private handleOptionKeyDown;
  /**
   * Handle selecting an option.
   * @param index Index of option.
   */
  private handleOptionSelect;
  /**
   * Set this._options array from options string, set selected, if one is selected.
   * @param options String
   */
  private arrayDataWatcher;
  render(): string;
}
