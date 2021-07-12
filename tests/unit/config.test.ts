import config from '../../src/config';
import { ApplicationConfiguration } from '../../src/types';

const baseConfig: ApplicationConfiguration = {
  api: {
    backend: {
      baseUrl: 'http://example.dev',
      timeout: 5000,
    },
  },
  expressSession: {
    secret: 'a session key secret goes here',
    useSecureCookie: false,
  },
  server: {
    port: 9876,
  },
  session: {
    collection: 'sessions',
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    expires: 1209600000,
    uri: undefined,
  },
};

/**
 * Note: the env vars used here are defined in `setupTests.ts`
 */
describe('config', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  test('will receive sane defaults', async () => {
    delete process.env.PORT;
    delete process.env.API_BACKEND_TIMEOUT;

    const conf = await import('../../src/config');

    expect(conf.default).toEqual({
      ...baseConfig,
      api: {
        ...baseConfig.api,
        backend: {
          ...baseConfig.api.backend,
          timeout: 3000,
        },
      },
      server: {
        port: 3000,
      },
    });
  });

  test('can define config as needed', () => {
    expect(config).toEqual(baseConfig);
  });
});
