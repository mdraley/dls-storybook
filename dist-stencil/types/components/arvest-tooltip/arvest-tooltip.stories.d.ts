import { TooltipPosition, TooltipCta, TooltipTrigger } from '../../global/ts/enums';
declare const _default: {
  title: string;
  argTypes: {
    position: {
      description: string;
      control: string;
      options: TooltipPosition[];
    };
    arrow: {
      description: string;
      control: string;
    };
    message: {
      description: string;
      control: string;
    };
    trigger: {
      description: string;
      control: string;
      options: TooltipTrigger[];
    };
    ctaType: {
      description: string;
      control: string;
      options: TooltipCta[];
    };
    ctaTitle: {
      description: string;
      control: string;
    };
    ctaUrl: {
      description: string;
      control: string;
    };
  };
  parameters: {
    layout: string;
  };
};
export default _default;
export declare const Tooltip: any;
