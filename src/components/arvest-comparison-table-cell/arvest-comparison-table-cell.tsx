import {Component, Host, h, Prop, FunctionalComponent} from '@stencil/core';
import { CellVariant, TypographyVariants } from '../../global/ts/enums';
import Styles from './arvest-comparison-table.styles';
import Check from './check.svg';
import Dash from './dash.svg';

@Component({
  tag: 'arvest-comparison-table-cell',
  styleUrl: 'arvest-comparison-table-cell.css',
  shadow: true
})
export class ArvestComparisonTableCell {
  @Prop() variant: CellVariant;

  @Prop() data?: string | Array<any>;

  private singleText = () => (
    <arvest-typography variant={TypographyVariants.caption}>
      {this.data}
    </arvest-typography>
  );

  private bulletList = () => (
    <ul style={this.getStyles('bulletList')}>
      {Array.isArray(this.data) &&
        this.data.map((item) => <li>
          <arvest-typography variant={TypographyVariants.caption}>
            {item}
          </arvest-typography>
        </li>)}
    </ul>
  );

  private checkmark = () => (
    <div style={this.getStyles('icons')}>
      <img src={Check} alt="" />
    </div>
  );

  private dash = () => (
    <div style={this.getStyles('icons')}>
      <img src={Dash} alt="" />
    </div>
  );

  private nonBulletList = () => (
    <ul style={this.getStyles('nonBulletList')}>
      {Array.isArray(this.data) &&
        this.data.map((item) => <li style={this.getStyles('nonBulletListItem')}>
          <arvest-typography variant={TypographyVariants.caption}>
            {item}
          </arvest-typography>
        </li>)}
    </ul>
  );

  private na = () => (
    <arvest-typography variant={TypographyVariants.caption}>
      N/A
    </arvest-typography>
  );

  private getStyles = (...params) => {
    let useStyle = {};
    // eslint-disable-next-line array-callback-return
    params.map((style) => {
      useStyle = {
        ...useStyle,
        ...Styles[style]
      };
    });
    return useStyle;
  };

  private switchVariant = () => {
    switch (this.variant) {
    case CellVariant.singleText:
      return this.singleText();
    case CellVariant.bulletList:
      return this.bulletList();
    case CellVariant.checkmark:
      return this.checkmark();
    case CellVariant.dash:
      return this.dash();
    case CellVariant.nonBulletList:
      return this.nonBulletList();
    case CellVariant.na:
      return this.na();
    default:
      return 'sorry this data type does not exist';
    }
  };

  render(): FunctionalComponent {
    return <Host>{this.switchVariant()}</Host>;
  }
}
