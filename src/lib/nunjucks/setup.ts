import nunjucks, { Environment } from 'nunjucks';
import path from 'path';

import { NunjucksConfigurationOptions } from '../../types';

const setup = ({ app, isDev }: NunjucksConfigurationOptions): Environment => {
  const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    watch: isDev,
    express: app,
  };

  const viewPaths = [
    path.join(__dirname, '..', '..', '..', 'node_modules', 'govuk-frontend'),
    path.join(__dirname, '..', '..', 'views'),
  ];

  return nunjucks.configure(viewPaths, nunjucksConfig);
};

export default setup;
