export const decorators = [
    (story) => `${story()}`,
  ],
  parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: {
        mobile1: {
          name: 'Mobile',
          styles: {
            height: '667px',
            width: '374px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: {
            height: '1024px',
            width: '767px',
          },
          type: 'tablet',
        },
      },
    },
  };
