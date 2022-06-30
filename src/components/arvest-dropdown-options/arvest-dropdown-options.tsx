import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import {IFormDropdownOption} from '../../global/ts/interfaces';
import {TypographyVariants} from '../../global/ts/enums';

@Component({
  tag: 'arvest-dropdown-options',
  styleUrl: 'arvest-dropdown-options.css',
  shadow: true
})
export class ArvestDropdownOptions {

  /**
   * Index of selected option.
   */
  @State() selected: number | null;

  /**
   * Dropdown options as an array.
   */
  @State() _options: IFormDropdownOption[];

  /**
   * Dropdown options as a string '[{label: string, value: string, selected?: boolean}]'
   */
  @Prop({mutable: true}) options?: string;

  /**
   * Set the width of the dropdown, can be any valid css value for the width property.
   */
  @Prop() width = '240px';

  /**
   * Enable fixed-height, scrollable dropdown
   */
  @Prop() scrollEnabled = true;

  /**
   * Unique identifier.
   */
  @Prop() identifier = 'arvestDropdownOptions';

  /**
   * Set true to open options.
   */
  @Prop() open = false;

  /**
   * Emitted when a dropdown option is selected. Data payload contains selected option.
   */
  @Event() dropdownSelectValue: EventEmitter<IFormDropdownOption>;

  /**
   * Emitted when options are changed. Data payload contains array of new options.
   */
  @Event({eventName: 'optionsUpdated'}) optionsUpdated: EventEmitter<IFormDropdownOption[]>;

  @Watch('options')
  setNavData (newValue: string): void {
    this.arrayDataWatcher(newValue);
  }

  @Watch('selected')
  handleSelectionChange(selection: number):void {
    this.dropdownSelectValue.emit(this._options[selection]);
  }

  componentWillLoad(): void {
    this.arrayDataWatcher(this.options);

    // Check for pre-selected value and set it - return plain options array
    this._options = this._options.map((item, index) => {
      if (item.selected) {
        this.selected = index;
      }
      return {label: item.label, value: item.value};
    });
  }

  /**
   * Handle choosing an option with keyboard.
   * @param ev KeyboardEvent
   * @param index Index of option.
   */
  private handleOptionKeyDown = (ev: KeyboardEvent, index: number) => {
    if (this.open && (ev.key === 'Enter' || ev.key === 'Space')) {
      this.handleOptionSelect(index);
    }
  }

  /**
   * Handle selecting an option.
   * @param index Index of option.
   */
  private handleOptionSelect = (index: number) => {
    this.selected = index;
    const option = this._options[index];
    this.dropdownSelectValue.emit(option);
  }

  /**
   * Set this._options array from options string, set selected, if one is selected.
   * @param options String
   */
  private arrayDataWatcher (options):void {
    if (typeof options === 'string') {
      this._options = JSON.parse(options);
    } else {
      this._options = options;
    }
    this.selected = this._options.findIndex((option) => option.selected);
  }

  render():string {
    return (
      <Host>
        <div
          class={'options' + (this.scrollEnabled ? ' scroll' : '') + (this.open ? ' open' : '')}
          style={{'width': this.width}}
          role={'tablist'}
        >
          {this._options.map((option, index) => {
            return (
              <button
                id={this.identifier + '-option-' + index}
                key={index}
                class={'option'}
                onClick={() => this.handleOptionSelect(index)}
                onKeyDown={(event) => this.handleOptionKeyDown(event, index)}
                data-value={option.value}
                role="tab"
                aria-selected={(this.selected === index) ? 'true' : 'false'}
              >
                <arvest-typography
                  variant={((this.selected === index) ? TypographyVariants.body2 : TypographyVariants.body1)}
                >
                  {option.label}
                </arvest-typography>
              </button>
            );
          })}
        </div>
      </Host>
    );
  }
}
