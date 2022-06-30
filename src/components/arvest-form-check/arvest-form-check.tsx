import {Component, Host, Prop, State, h, FunctionalComponent} from '@stencil/core';
import { FormCheckboxType } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-form-check',
  'styleUrl': 'arvest-form-check.css',
  'shadow': false
})

export class ArvestFormCheck {

  @Prop() label: string;

  @Prop() name: string;

  @Prop() ariaDescribedBy: string;

  @Prop() type: FormCheckboxType;

  @Prop() value?: string;

  @Prop() options?: string;

  @Prop() inline?: boolean;

  @Prop() disabled?: boolean;

  @State() _options?: Array<any>;

  private arrayDataWatcher (options) {
    if (typeof options === 'string') {
      this._options = JSON.parse(options);
    } else {
      this._options = options;
    }
  }

  private renderOptions = () => this._options.map((option, index) => (
    <label class={this.type + (option.disabled ? ' disabled' : '')}>
      {option.label} {<small>{`${option.disabled ? '(disabled)' : ''}`}</small>}{' '}
      <input type={this.type} value={option.value} name={this.name} id={this.name + index}
        aria-describedby={this.ariaDescribedBy} disabled={option.disabled} tabIndex={0} />
      <span class="checkmark" />
    </label>
  ));

  private renderSingleCheck = () => (
    <label class={this.type + (this.disabled ? ' disabled' : '')}>
      {this.label} {<small>{`${this.disabled ? '(disabled)' : ''}`}</small>}{' '}
      <input type={this.type} value={this.value} name={this.name} id={this.name}
        aria-describedby={this.ariaDescribedBy} disabled={this.disabled} tabIndex={0}/>
      <span class="checkmark"/>
    </label>
  );

  componentWillLoad(): void {
    this.arrayDataWatcher(this.options);
  }

  render(): FunctionalComponent {
    return <Host>
      {Array.isArray(this._options) ? <div class={this.inline && 'form-check-inline'}>{this.renderOptions()}</div> : this.renderSingleCheck()}
    </Host>;
  }
}
