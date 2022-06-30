declare const arvestBadgeArgs: {
  slot: {
    description: string;
    control: string;
  };
  color: {
    description: string;
    defaultValue: {
      summary: string;
    };
    control: {
      type: string;
      options: string[];
    };
  };
};
export default arvestBadgeArgs;
