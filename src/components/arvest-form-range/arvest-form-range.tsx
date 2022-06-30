import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  'tag': 'arvest-form-range',
  'styleUrl': 'arvest-form-range.css',
  'shadow': true
})

export class ArvestFormRange {

    @Prop() label: string;

    render () {

      return (
        <Host>
          <div>
            <label>{this.label}</label>
            <input type="range" class="form-control-range" id="formControlRange" />
          </div>
          <slot></slot>
        </Host>
      );
    }
}
