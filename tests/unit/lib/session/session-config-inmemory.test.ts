import sessionConfigInMemory from '../../../../src/lib/session/session-config-inmemory';

describe('lib/session/session-config-inmemory', () => {
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

    const sessionConfig = await import('../../../../src/lib/session/session-config-inmemory');

    expect(() => sessionConfig.default()).toThrow('Session secret must be set');
  });

  it('should return the in memory config for the test environment', () => {
    expect(sessionConfigInMemory()).toEqual({
      cookie: { secure: false },
      resave: false,
      saveUninitialized: true,
      secret: 'a session key secret goes here',
    });
  });
});
