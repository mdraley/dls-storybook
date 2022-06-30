declare const arvestAlertArgs: {
  slot: {
    description: string;
    control: string;
  };
  type: {
    description: string;
    control: {
      type: string;
      options: string[];
    };
  };
  banner: {
    description: string;
    control: {
      type: string;
    };
  };
};
export default arvestAlertArgs;
