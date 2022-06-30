import { Component, Host, Prop, h, Listen, State, FunctionalComponent } from '@stencil/core';
import { TypographyVariants, ViewportBreakpoints, AccordionType } from '../../global/ts/enums';

@Component({
  tag: 'arvest-accordion',
  styleUrl: 'arvest-accordion.css',
  shadow: true
})

export class ArvestAccordion {
  /** Accordion title */
  @Prop() accordiontitle: string;

  /** Accordion type.
   *  Options are 'content', 'table-simple', 'nav', and 'mobileNav'
   */
  @Prop() type: string;

  /** Array of row titles */
  @Prop() rowtitles?: Array<any>;

  /** 2D Array of columns and cells */
  @Prop() cols?: Array<Array<any>>;

  @Prop() activeCol = 0;

  @State() isopen = false;

  @State() viewport = window.innerWidth;

  @State() ismobile = this.viewport < ViewportBreakpoints.tablet;

  @Listen(
    'resize',
    {
      target: 'window',
      capture: true
    }
  )

  @Listen('keydown')
  public handleKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.handleToggle();
    }
  }

  calcViewport(): void {
    this.viewport = window.innerWidth;
  }

  private handleToggle = () => {
    this.isopen = !this.isopen;
  };

  private renderRowTitles = () => this.rowtitles.map((rowtitle) => (
    <div class="grid-cell">
      <arvest-typography variant={TypographyVariants.body2}>
        {rowtitle}
      </arvest-typography>
    </div>
  ));

  private renderGridTable = () => (
    <div
      class="grid-table"
      style={{
        gridTemplateRows: `repeat(${this.rowtitles.length}, auto)`
      }}
    >
      {this.renderRowTitles()}
      {this.cols.map((col, index) => col.map((datacell) => (
        <div class={`grid-cell ${index % 2 < 1 && 'color-background'}`}>
          <arvest-comparison-table-cell
            variant={datacell.variant}
            data={datacell.data}
          />
        </div>
      )))}
    </div>
  );

  private renderMobileGridTable = () => (
    <div
      class="grid-table"
      style={{
        gridTemplateRows: `repeat(${this.rowtitles.length}, auto)`
      }}
    >
      {this.renderRowTitles()}
      {this.cols[this.activeCol].map((datacell) => <div class={`grid-cell ${'color-background'}`}>
        <arvest-comparison-table-cell
          variant={datacell.variant}
          data={datacell.data}
        />
      </div>)}
    </div>
  );

  private getTitleStyle = () => {
    if (this.type === AccordionType.content && this.isopen) {
      return 'accordion-title-content open';
    } else if (this.type === AccordionType.content) {
      return 'accordion-title-content';
    } else if (this.type === AccordionType.tableSimple) {
      return 'accordion-title-table-simple';
    } else if (this.type === AccordionType.nav) {
      return 'accordion-title-nav';
    } else if (this.type === AccordionType.mobileNav) {
      return 'accordion-title-mobile-nav';
    }
    return 'accordion-title-table';
  };

  private getSentenceCase = (title: string) => {
    const newTitle = title.toLowerCase();
    return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
  }

  componentWillLoad(): void {
    if (this.type === AccordionType.table) {
      this.isopen = true;
    }
  }

  componentWillRender(): void {
    this.viewport = window.innerWidth;
    this.ismobile = this.viewport < ViewportBreakpoints.tablet;
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div onClick={this.handleToggle} class={this.getTitleStyle()} tabIndex={0}>
          {this.type === AccordionType.table && (
            <arvest-typography variant={TypographyVariants.h4}>
              {this.accordiontitle}
            </arvest-typography>
          )}
          {this.type === AccordionType.tableSimple && (
            <arvest-typography variant={TypographyVariants.h4}>
              {this.getSentenceCase(this.accordiontitle)}
            </arvest-typography>
          )}
          {this.type === AccordionType.content && (
            <arvest-typography variant={TypographyVariants.action}>
              {this.getSentenceCase(this.accordiontitle)}
            </arvest-typography>
          )}
          {this.type === AccordionType.nav && (
            <arvest-typography variant={TypographyVariants.navigation}>
              {this.accordiontitle}
            </arvest-typography>
          )}
          {this.type === AccordionType.mobileNav && (
            <arvest-typography variant={TypographyVariants.mobileNavigation}>
              {this.accordiontitle}
            </arvest-typography>
          )}
          <arvest-icon
            class="accordion-icon"
            style={{
              transform: `rotate(${this.isopen ? '0' : '180deg'})`,
              transition: '0.2s ease-in-out'
            }}
            icon="chevron-up-light"
          />
        </div>
        {this.type === AccordionType.table && (
          <div
            class={'table-container' + (this.isopen ? ' open' : '')}
            style={{
              transform: `scaleY(${this.isopen ? '1' : '0'})`,
              opacity: `${this.isopen ? '1' : '0'}`,
              maxHeight: `${this.isopen ? '100%' : '0px'}`
            }}
          >
            {this.ismobile ? this.renderMobileGridTable() : this.renderGridTable()}
          </div>
        )}
        {this.type === AccordionType.tableSimple && (
          <div
            class={'accordion-table-simple' + (this.isopen ? ' open' : '')}
            style={{
              transform: `scaleY(${this.isopen ? '1' : '0'})`,
              opacity: `${this.isopen ? '1' : '0'}`,
              maxHeight: `${this.isopen ? '100%' : '0px'}`
            }}
          >
            <arvest-typography variant={TypographyVariants.body1}>
              <slot />
            </arvest-typography>
          </div>
        )}
        {this.type === AccordionType.content && (
          <div
            class={'accordion-content' + (this.isopen ? ' open' : '')}
            style={{
              transform: `scaleY(${this.isopen ? '1' : '0'})`,
              opacity: `${this.isopen ? '1' : '0'}`,
              maxHeight: `${this.isopen ? '100%' : '0px'}`
            }}
          >
            <arvest-typography variant={TypographyVariants.body1}>
              <slot />
            </arvest-typography>
          </div>
        )}
        {this.type === AccordionType.nav && (
          <div
            class={'accordion-nav' + (this.isopen ? ' open' : '')}
            style={{
              transform: `scaleY(${this.isopen ? '1' : '0'})`,
              opacity: `${this.isopen ? '1' : '0'}`,
              paddingBottom: `${this.isopen ? '16px' : '0'}`,
              maxHeight: `${this.isopen ? '100%' : '0px'}`
            }}
          >
            <slot />
          </div>
        )}
        {this.type === AccordionType.mobileNav && (
          <div
            class={'accordion-nav' + (this.isopen ? ' open' : '')}
            style={{
              transform: `scaleY(${this.isopen ? '1' : '0'})`,
              opacity: `${this.isopen ? '1' : '0'}`,
              paddingBottom: `${this.isopen ? '16px' : '0'}`,
              maxHeight: `${this.isopen ? '100%' : '0px'}`
            }}
          >
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
