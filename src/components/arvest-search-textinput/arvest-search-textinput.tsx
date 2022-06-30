import { Component, Host, Prop, h } from '@stencil/core';
import { FormTextInputType } from '../../global/ts/enums';

@Component({
  'tag': 'arvest-search-textinput',
  'styleUrl': 'arvest-search-textinput.css',
  'shadow': true
})

export class ArvestSearchTextInput {

    @Prop() label: string;

    @Prop() elemId: string;

    @Prop() ariaDescribedBy: string;

    @Prop() ariaLabel: string;

    @Prop() small?: string;

    @Prop() placeholder?: string;

    @Prop() type: FormTextInputType = FormTextInputType.text;

    render () {

      return (
        <Host>
          {this.label &&
                    <label htmlFor={this.elemId}>
                      {this.label}
                    </label>
          }
          <input
            type={this.type}
            class="form-control"
            id={this.elemId}
            aria-label={this.ariaLabel}
            aria-describedby={this.ariaDescribedBy}
            placeholder={this.placeholder}
          />
          {this.small && <small id="emailHelp" class="form-text text-muted">{this.small}</small>}
        </Host>
      );
    }
}
