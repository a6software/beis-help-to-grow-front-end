import nunjucks, { Environment } from 'nunjucks';
import path from 'path';
import { NunjucksConfigurationOptions } from '../../types';
import { validationErrorsToGovUkErrorList } from '../validation-errors-to-gov-uk-error-list';

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

  const env = nunjucks.configure(viewPaths, nunjucksConfig);

  env.addFilter('validationErrorsToGovUkErrorList', validationErrorsToGovUkErrorList);

  return env;
};

export default setup;
