import { Express } from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import setup from '../../../../src/lib/nunjucks/setup';

jest.mock('nunjucks');

describe('lib/nunjucks', () => {
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
  });
});
