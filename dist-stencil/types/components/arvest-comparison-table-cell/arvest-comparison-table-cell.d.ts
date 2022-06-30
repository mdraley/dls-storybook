import { FunctionalComponent } from '../../stencil-public-runtime';
import { CellVariant } from '../../global/ts/enums';
export declare class ArvestComparisonTableCell {
  variant: CellVariant;
  data?: string | Array<any>;
  private singleText;
  private bulletList;
  private checkmark;
  private dash;
  private nonBulletList;
  private na;
  private getStyles;
  private switchVariant;
  render(): FunctionalComponent;
}
