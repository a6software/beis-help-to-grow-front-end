import sessionConfig from '../../../../src/lib/session/session-config';
import sessionConfigInMemory from '../../../../src/lib/session/session-config-inmemory';
import { ApplicationEnvironment } from '../../../../src/types';
import sessionConfigMongoDb from '../../../../src/lib/session/session-config-mongodb';

jest.mock('../../../../src/lib/session/session-config-inmemory');
jest.mock('../../../../src/lib/session/session-config-mongodb');

describe('lib/session/session-config', () => {
  it('should throw if given an invalid config', () => {
    const givenEnvironment = 'invalid' as ApplicationEnvironment;

    expect(() => sessionConfig(givenEnvironment)).toThrow(
      `Unrecognised application environment: ${givenEnvironment}`,
    );
  });

  it('should return the in memory config for the test environment', () => {
    sessionConfig('test');
    expect(sessionConfigInMemory).toHaveBeenCalledTimes(1);
  });

  ['development', 'production', 'staging'].forEach((environment: ApplicationEnvironment) => {
    it(`should return the mongodb config for the ${environment} environment`, () => {
      sessionConfig(environment);
      expect(sessionConfigMongoDb).toHaveBeenCalledTimes(1);
    });
  });
});
