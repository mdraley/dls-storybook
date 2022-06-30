import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArvestPrimaryCarouselButtongroup {
  slides: string;
  slidePosition: number;
  ismobile: boolean;
  _slides: Array<any>;
  selectedBtn: number;
  btnClicked: EventEmitter<number>;
  private colorDefault;
  private colorHover;
  private arrayDataWatcher;
  private setSelectedBtn;
  private defaultSelectedBtn;
  componentWillLoad(): void;
  render(): any;
}
