import {
  Component,
  Host,
  Listen,
  State,
  h,
  Prop,
  FunctionalComponent,
  Element,
  Event,
  EventEmitter
} from '@stencil/core';
import {IFormDropdownOption} from '../../global/ts/interfaces';
import {TypographyVariants} from '../../global/ts/enums';

@Component({
  tag: 'arvest-dropdown',
  styleUrl: 'arvest-dropdown.css',
  shadow: true
})
export class ArvestDropdown {
  @Element() el: HTMLElement;

  /** ID for the dropdown **/
  @Prop() identifier = 'arvestDropdown';

  /** Dropdown label text */
  @Prop() label: string;

  /** Dropdown options '[{label: string, value: string, selected?: boolean}]' **/
  @Prop({mutable: true}) options?: string;

  /** Set the width of the dropdown. Can be any valid value for the width CSS property. **/
  @Prop() width = '240px';

  /** Enable fixed-height, scrollable dropdown **/
  @Prop() scrollEnabled = true;

  /** Disable dropdown */
  @Prop() disabled: string;

  @State() show = false;

  @State() selected: IFormDropdownOption;

  @State() isDisabled: boolean;

  /**
   * Event emitted when an options is chosen from the dropdown. Data payload is an object: { label: string, value: string }.
   */
  @Event() dropdownSelectValue: EventEmitter<IFormDropdownOption>;

  @Listen('click', { target: 'window' })
  public handleClick(ev: MouseEvent): void {
    if (this.show && !this.el.contains(ev.target as Node)) {
      this.clickToggle();
      this.el.shadowRoot.getElementById(this.identifier).focus();
    }
  }

  @Listen('keydown')
  public handleKeyDown(ev: KeyboardEvent): void {
    if (this.show && ev.key === 'Escape') {
      this.clickToggle();
      this.el.shadowRoot.getElementById(this.identifier).focus();
    }
  }

  @Listen('dropdownSelectValue')
  handleDropdownSelectValue(e: CustomEvent):void {
    this.selected = e.detail;
    this.el.shadowRoot.getElementById(this.identifier).focus();
  }

  private clickToggle = () => {
    if (!this.isDisabled) {
      this.show = !this.show;
    }
  }

  private handleOptionSelect = (option: IFormDropdownOption) => {
    this.dropdownSelectValue.emit(option);
  }

  private handleTriggerKeyDown = (ev: KeyboardEvent) => {
    if (!this.isDisabled) {
      if ((!this.show && (ev.key === 'Enter' || ev.key === 'Space' || ev.key === 'ArrowUp' || ev.key === 'ArrowDown'))) {
        this.clickToggle();
      } else if ((this.show && (ev.key === 'Enter' || ev.key === 'Space'))) {
        this.clickToggle();
        this.el.shadowRoot.getElementById(this.identifier).focus();
      }
    }
  }

  componentWillLoad (): void {
    this.clickToggle = this.clickToggle.bind(this);
    this.isDisabled = (this.disabled === 'true');
  }

  handleClickOnDropdown(e: MouseEvent):void {
    e.preventDefault();
    e.stopPropagation();
    this.clickToggle();
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          id={this.identifier}
          class={'select-wrapper' + (this.show ? ' open' : '') + (this.isDisabled ? ' disabled' : '')}
          style={{'width': this.width}}
          onClick={(e) => this.handleClickOnDropdown(e)}
          onKeyDown={(event) => this.handleTriggerKeyDown(event)}
          tabIndex={this.isDisabled ? -1 : 0}
          aria-label={'select'}
          role="tabpanel"
        >
          <div class={'select' + (this.show ? ' open' : '')}>
            <div class={'select-trigger' + (this.show ? ' open' : '')}>
              <div>
                <label
                  htmlFor={this.identifier}
                  class={'dropdown-label' + (this.show ? ' show' : '') + ((this.selected) ? ' selected' : '')}>
                  {this.label}
                </label>
                <div class={'selected-option'}>
                  {this.selected && (
                    <arvest-typography variant={TypographyVariants.body1}>
                      {this.selected.label}
                    </arvest-typography>
                  )}
                </div>
              </div>
              <arvest-icon
                class="dropdown-icon"
                style={{
                  transform: `rotate(${this.show ? '0' : '180deg'})`,
                  transition: '0.2s ease-in-out'
                }}
                icon="chevron-up-light"
              />
            </div>
            
            <arvest-dropdown-options 
              options={this.options}
              width={this.width}
              scrollEnabled={this.scrollEnabled} 
              onDropdownSelectValue={(e) => this.handleOptionSelect(e.detail)}
              open={this.show}
            />
          </div>
        </div>
      </Host>
    );
  }
}
