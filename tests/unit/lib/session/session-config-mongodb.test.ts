import sessionConfigMongoDb from '../../../../src/lib/session/session-config-mongodb';

describe('lib/session/session-config-mongodb', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('should throw if given an invalid config', async () => {
    delete process.env.SESSION_KEY;

    const sessionConfig = await import('../../../../src/lib/session/session-config-mongodb');

    expect(() => sessionConfig.default()).toThrow('Session secret must be set');
  });

  it('should return the in memory config for the test environment', () => {
    const config = sessionConfigMongoDb();

    expect(config.cookie.secure).toBeFalsy();
    expect(config.resave).toBeFalsy();
    expect(config.saveUninitialized).toBeTruthy();
    expect(config.secret).toEqual('a session key secret goes here');
    expect(config.store).toBeDefined();
  });
});
