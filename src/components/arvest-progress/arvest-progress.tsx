import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'arvest-progress',
  styleUrl: 'arvest-progress.css',
  shadow: true
})

export class ArvestProgress {

  @Prop() percentage?: string = '';

  @Prop() height?: string = '';

  @Prop() haslabel?: boolean;

  @Prop() isanimated?: boolean;

  render () {

    return (
      <Host>
        <div class="progress" style={{ height: `${this.height ? `${this.height}px` : '1rem'}` }}>
          <div class={`progress-bar ${this.isanimated ? 'progress-bar-striped progress-bar-animated' : ''}`} style={{ width: `${this.percentage}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            {this.haslabel ? `${this.percentage}%` : ''}
          </div>
        </div>
      </Host>
    );
  }
}
