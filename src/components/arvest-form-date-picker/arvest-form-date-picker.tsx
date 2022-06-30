import {Component, Host, h, FunctionalComponent, Element, Prop, State, Event, EventEmitter, Listen, Watch} from '@stencil/core';
import { defineCustomElements } from '@duetds/date-picker/custom-element';
import {DuetLocalizedText} from '@duetds/date-picker/dist/types/components/duet-date-picker/date-localization';
import {TypographyVariants} from '../../global/ts/enums';
import { DateTime } from 'luxon';
import Inputmask from 'inputmask';
defineCustomElements(window);

@Component({
  tag: 'arvest-form-date-picker',
  styleUrl: 'arvest-form-date-picker.css',
  shadow: false
})
export class ArvestFormDatePicker {

  @Element() el: HTMLElement;

  inputRef!: HTMLDuetDatePickerElement;

  /**
   * Name for the input element
   */
  @Prop() name = 'arvest-date-picker';

  /**
   * Component id
   */
  @Prop() identifier = 'arvest-date-picker';

  /**
   * Is the input element disabled?
   */
  @Prop() disabled = false;

  /**
   * Is the input element required?
   */
  @Prop() required = false;

  /**
   * Minimum date available to pick (ex. 1900-01-01)
   */
  @Prop() min = '1900-01-01';

  /**
   * Maximum date available to pick (ex. 1900-01-01)
   */
  @Prop() max = new Date().toISOString().split('T')[0];

  /**
   * Assign a role to the component
   */
  @Prop() role?: string;

  /**
   * Define the label for the component
   */
  @Prop() label = 'Choose a date';

  /**
   * Define the placeholder value for the input
   */
  @Prop() placeholder = 'mm/dd/yyyy';

  /**
   * Element value (ex. 1900-01-01)
   */
  @Prop({mutable: true}) value?: string;

  @Watch('value')
  handleValueChange(newValue: string): void {
    this._value = newValue;
  }

  @State() _value: string;

  @State() error?: string

  @State() focused? = false;

  @State() _placeholder: string

  @State() isValid = false;

  /**
   * Event emitted when the date picker date changes.
   */
  @Event() datePickerChange: EventEmitter<CustomEvent>;

  /**
   * Event emitted when the user focuses into the date picker.
   */
  @Event() datePickerFocus: EventEmitter<CustomEvent>;

  /**
   * Event emitted when the user leaves the date picker.
   */
  @Event() datePickerBlur: EventEmitter<CustomEvent>;

  /**
   * Event emitted when calendar display of date picker opens.
   */
  @Event() datePickerOpen: EventEmitter<CustomEvent>;

  /**
   * Event emitted when calendar display of date picker closes.
   */
  @Event() datePickerClose: EventEmitter<CustomEvent>;

  @Listen('duetChange')
  handleChange(event: CustomEvent & { component: 'duet-date-picker'; valueAsDate: Date; value: string; }): void {
    this.datePickerChange.emit(event);
    if (event.detail.valueAsDate) {
      this.error = null;
      this.focused = true;
      this._placeholder = this.placeholder;
    }
    if (!event.detail.valueAsDate) {
      this.isValid = false;
    }
  }

  @Listen('duetFocus')
  handleFocus(event: CustomEvent): void {
    this.focused = true;
    this._placeholder = this.placeholder;
    this.datePickerFocus.emit(event);
  }

  @Listen('duetBlur')
  handleBlur(event: CustomEvent): void {
    const currentValue = this.el.querySelector('input').value;
    const date = DateTime.fromFormat(currentValue, 'M/d/yyyy');
    this.isValid = !!date.isValid;
    if (!this.isValid) {
      this.error = 'Please enter a valid date.';
    }
    if (this.isValid) {
      this.error = null;
    }
    if (!currentValue) {
      this.focused = false;
      this._placeholder = '';
      if (!this.required) {
        this.error = null;
      }
    }
    this.datePickerBlur.emit(event);
  }

  @Listen('duetOpen')
  handleOpen(event: CustomEvent): void {
    this.datePickerOpen.emit(event);
  }

  @Listen('duetClose')
  handleClose(event: CustomEvent): void {
    this.datePickerClose.emit(event);
  }

  /** Function that implements InputMask. */
  handleTextMask(): void {
    const inputEl = this.el.querySelector('input');
    Inputmask('99/99/9999', {'placeholder': this._placeholder}).mask(inputEl);
  }

  componentWillRender(): void {
    if (this.value) {
      this._value = this.value;
    }
  }

  render(): FunctionalComponent {
    const DATE_FORMAT = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u;
    const dateAdapter = {
      parse(value = '', createDate) {
        const matches = value.match(DATE_FORMAT);

        if (matches) {
          const date = createDate(matches[3], matches[1], matches[2]);
          return date;
        }
        return null;
      },
      format(date) {
        const day = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
        const month = ((date.getMonth() + 1) < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
        const formattedDate = `${month}/${day}/${date.getFullYear()}`;
        return formattedDate;
      }
    };
    const localization = {
      locale: 'en-US',
      buttonLabel: 'Choose date',
      placeholder: this._placeholder,
      selectedDateMessage: 'Selected date is',
      prevMonthLabel: 'Previous month',
      nextMonthLabel: 'Next month',
      monthSelectLabel: 'Month',
      yearSelectLabel: 'Year',
      closeLabel: 'Close window',
      keyboardInstruction: 'You can use arrow keys to navigate dates',
      calendarHeading: 'Choose a date',
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    };

    return (
      <Host>
        <label
          class={'date-picker' + (this.focused ? ' focused' : '')}
          htmlFor="duet-date-picker">
          {this.label}
        </label>
        <duet-date-picker
          name={this.name}
          identifier={this.identifier}
          min={this.min}
          max={this.max ?? this.max}
          role={this.role ?? this.role}
          value={this._value ?? this._value}
          onKeyUp={() => {
            this.handleTextMask();
          }}
          dateAdapter={dateAdapter}
          localization={localization as DuetLocalizedText}
          ref={(el) => this.inputRef = el as HTMLDuetDatePickerElement}
          required={this.required ?? this.required}
          disabled={this.disabled ?? this.disabled}
        />
        {this.error && (
          <div class={'date-picker-error'}>
            <arvest-typography variant={TypographyVariants.caption}>
              {this.error}
            </arvest-typography>
          </div>
        )}
      </Host>
    );
  }
}
