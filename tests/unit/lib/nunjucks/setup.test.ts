import { Express } from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import setup from '../../../../src/lib/nunjucks/setup';
import { validationErrorsToGovUkErrorList } from '../../../../src/lib/validation-errors-to-gov-uk-error-list';
import { ROUTES } from '../../../../src/routes/routes';

const mockAddFilter = jest.fn();
const mockAddGlobal = jest.fn();

jest.mock('nunjucks', () => {
  return {
    configure: jest.fn(() => ({
      addFilter: mockAddFilter,
      addGlobal: mockAddGlobal,
    })),
  };
});

describe('lib/nunjucks/setup', () => {
  it('should setup nunjucks', () => {
    const mockApp: Express = jest.fn() as unknown as Express;
    const isDev = false;

    setup({ app: mockApp, isDev });

    expect(nunjucks.configure).toHaveBeenCalledWith(
      [
        path.join(__dirname, '..', '..', '..', '..', 'node_modules', 'govuk-frontend'),
        path.join(__dirname, '..', '..', '..', '..', 'src', 'views'),
      ],
      { autoescape: true, express: mockApp, noCache: true, watch: isDev },
    );

    expect(mockAddFilter).toHaveBeenCalledWith(
      'validationErrorsToGovUkErrorList',
      validationErrorsToGovUkErrorList,
    );

    expect(mockAddGlobal).toHaveBeenCalledWith('ROUTES', ROUTES);
  });
});
