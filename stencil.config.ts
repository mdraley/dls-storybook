import { Config } from '@stencil/core';
import { distDirs, name } from './package.json';

export const config: Config = {
  namespace: name,
  globalStyle: 'src/global/global.css',
  enableCache: false,
  outputTargets: [
    // creates /dist dir
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: distDirs.stencil,

      copy: [
        // copy assets into static for storybook and stencil build
        { src: 'assets' }
      ]
    },
    // one file in es6
    {
      type: 'dist-custom-elements-bundle',
      dir: distDirs.stencil
    },
    // creates readme.md for components
    {
      type: 'docs-readme',
      footer: 'All components ©2021 Arvest. All rights reserved.'
    },
    // create components(.d.ts|json) into dist
    {
      type: 'docs-json',
      file: `${distDirs.stencil}/components.json`
    },
    {
      type: 'www',
      copy: [
        // copy assets into static for storybook and stencil build
        { src: 'assets' }
      ],
      serviceWorker: null // disable service workers,
    }
  ]
};
