import { FunctionalComponent } from '../../stencil-public-runtime';
import { FormCheckboxType } from '../../global/ts/enums';
export declare class ArvestFormCheck {
  label: string;
  name: string;
  ariaDescribedBy: string;
  type: FormCheckboxType;
  value?: string;
  options?: string;
  inline?: boolean;
  disabled?: boolean;
  _options?: Array<any>;
  private arrayDataWatcher;
  private renderOptions;
  private renderSingleCheck;
  componentWillLoad(): void;
  render(): FunctionalComponent;
}
