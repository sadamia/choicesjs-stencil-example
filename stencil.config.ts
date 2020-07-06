import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'choicesjs-stencil-example',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalScript: 'src/global/app.tsx',
};
