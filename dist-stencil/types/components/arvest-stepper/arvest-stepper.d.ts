import { FunctionalComponent } from '../../stencil-public-runtime';
import { StepperStates } from '../../global/ts/enums';
export declare class ArvestStepper {
  /** The displayed title for each step, in order, comma separated, no spaces, max 5.  **/
  stepTitles: string;
  setTitles(newValue: string): void;
  titles: string[];
  /** The step URL, in order, comma separated, no spaces, max 5.  **/
  stepUrls: string;
  setUrls(newValue: string): void;
  urls: string[];
  /** The step state, in order, comma separated, no spaces, max 5. (active, complete, incomplete)  **/
  stepStates: string;
  setStates(newValue: string): void;
  states: StepperStates[];
  isMobile: boolean;
  handleResize(e: UIEvent): void;
  componentWillRender(): void;
  private getStepCount;
  render(): FunctionalComponent;
}
