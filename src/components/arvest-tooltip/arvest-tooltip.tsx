import {Component, FunctionalComponent, h, Host, Listen, Prop, State} from '@stencil/core';
import {TooltipCta, TooltipPosition, TooltipTrigger, TypographyVariants} from '../../global/ts/enums';

@Component({
  tag: 'arvest-tooltip',
  styleUrl: 'arvest-tooltip.css',
  shadow: true
})

export class ArvestTooltip {

  /** Set the position of the tooltip.
   *  Options:  (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
   * **/
  @Prop() position?: TooltipPosition = TooltipPosition.topCenter;

  /** Show or hide the tooltip arrow.  **/
  @Prop() arrow = false;

  /** Show or hide the tooltip arrow.  **/
  @Prop() trigger?: TooltipTrigger = TooltipTrigger.hover;

  /**
   * Tooltip body copy/message (no limit)
   */
  @Prop() message?: string;

  /** Type of CTA enabled?
   *  Options:  (text, button)
   * **/
  @Prop() ctaType?: TooltipCta;

  /** CTA title
   * Options:  (button or text)
   * **/
  @Prop() ctaTitle?: string;

  /** CTA full URL  **/
  @Prop() ctaUrl?: string;

  @State() show = false;

  @Listen('keydown')
  public handleKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.show ? this.closeMessage() : this.showMessage();
    }
    if (ev.key === 'Escape') {
      this.closeMessage();
    }
  }

  private onHover = (): void => {
    if (this.trigger === TooltipTrigger.hover) {
      this.showMessage();
    }
  };

  private onClick = (): void => {
    if (this.trigger === TooltipTrigger.click) {
      this.showMessage();
    }
  };

  private showMessage = (): void => {
    this.show = true;
  };

  private closeMessage = (): void => {
    this.show = false;
  };

  render(): FunctionalComponent {
    return (
      <Host
        onMouseOver={this.onHover}
        onClick={this.onClick}
        onMouseLeave={this.closeMessage}
        onBlur={this.closeMessage}
        tabIndex={0}
      >
        <div class={'tooltip' + (this.trigger === TooltipTrigger.click ? ' click-trigger' : '')}>
          <slot/>
          {this.show &&
            <div
              class={'tooltip-text ' + this.position + (this.arrow ? ' arrow' : '')}
              role="tooltip"
            >
              {this.message}
              {this.ctaType === TooltipCta.text && (
                <a href={this.ctaUrl} class="text-cta">
                  <arvest-typography variant={TypographyVariants.navigation}>
                    {this.ctaTitle}
                  </arvest-typography>
                </a>
              )}
              {this.ctaType === TooltipCta.button && (
                <a href={this.ctaUrl} class="button-cta">
                  <arvest-typography variant={TypographyVariants.navigation}>
                    {this.ctaTitle}
                  </arvest-typography>
                </a>
              )}
            </div>
          }
        </div>
      </Host>
    );
  }
}
