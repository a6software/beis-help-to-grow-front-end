import config from '../src/config';

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

    const conf = await import('../src/config');

    expect(conf.default).toEqual({
      server: {
        port: 3000,
      },
    });
  });

  test('can define config as needed', () => {
    expect(config).toEqual({
      server: {
        port: 9876,
      },
    });
  });
});
