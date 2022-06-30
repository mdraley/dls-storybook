declare const arvestButtonArgs: {
  label: {
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
  disabled: {
    description: string;
    control: {
      type: string;
    };
  };
};
export default arvestButtonArgs;
