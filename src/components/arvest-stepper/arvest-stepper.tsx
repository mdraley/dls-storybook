import {Component, Host, h, FunctionalComponent, Prop, Watch, State, Listen} from '@stencil/core';
import {StepperStates, TypographyVariants, ViewportBreakpoints} from '../../global/ts/enums';

@Component({
  tag: 'arvest-stepper',
  styleUrl: 'arvest-stepper.css',
  shadow: true
})

export class ArvestStepper {

  /** The displayed title for each step, in order, comma separated, no spaces, max 5.  **/
  @Prop() stepTitles: string;

  @Watch('stepTitles')
  setTitles(newValue: string): void {
    this.titles = newValue.split(',').slice(0, 5);
  }

  @State() titles: string[];

  /** The step URL, in order, comma separated, no spaces, max 5.  **/
  @Prop() stepUrls: string;

  @Watch('stepUrls')
  setUrls(newValue: string): void {
    this.urls = newValue.split(',').slice(0, 5);
  }

  @State() urls: string[];

  /** The step state, in order, comma separated, no spaces, max 5. (active, complete, incomplete)  **/
  @Prop() stepStates: string;

  @Watch('stepStates')
  setStates(newValue: string): void {
    const states = newValue.split(',').slice(0, 5);
    this.states = states as StepperStates[];
  }

  @State() states: StepperStates[];

  @State() isMobile = window.innerWidth < ViewportBreakpoints.tablet;

  @Listen(
    'resize',
    {
      target: 'window',
      capture: true
    }
  )
  handleResize(e: UIEvent): void {
    const window = e.target as Window;
    this.isMobile = window.innerWidth < ViewportBreakpoints.tablet;
  }

  componentWillRender(): void {
    this.titles = this.stepTitles.split(',').slice(0, 5);
    this.urls = this.stepUrls.split(',').slice(0, 5);
    const states = this.stepStates.split(',').slice(0, 5);
    this.states = states as StepperStates[];
  }

  private getStepCount = (): string => {
    return this.titles.length > 3 ? 'long' : 'short';
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div class={'container ' + this.getStepCount()}>
          <div class="bar"/>
          {this.titles.map((title, i) => {
            if (this.states[i] === StepperStates.active) {
              return (
                <div class="step">
                  <div class="active"/>
                  <div class="content">
                    <arvest-typography
                      variant={TypographyVariants.labels}
                    >
                      {title}
                    </arvest-typography>
                  </div>
                </div>
              );
            } else if (this.states[i] === StepperStates.complete) {
              return (
                <div class="step">
                  <a href={this.urls[i]}>
                    <div class="complete"/>
                    <div class="content">
                      {!this.isMobile && (
                        <arvest-typography
                          variant={TypographyVariants.labels}
                        >
                          {title}
                        </arvest-typography>
                      )}
                    </div>
                  </a>
                </div>
              );
            }

            return (
              <div class="step">
                <div class="incomplete" />
                <div class="content">
                  {!this.isMobile && (
                    <arvest-typography
                      variant={TypographyVariants.labels}
                    >
                      {title}
                    </arvest-typography>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
