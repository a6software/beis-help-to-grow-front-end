import logger from '../../../src/lib/logger';

describe('lib/logger', () => {
  // not the world's greatest unit test, but proves we have something that looks like a logger.
  it('should create a logger instance', () => {
    expect(logger().levels).toEqual({
      labels: {
        '10': 'trace',
        '20': 'debug',
        '30': 'info',
        '40': 'warn',
        '50': 'error',
        '60': 'fatal',
      },
      values: { trace: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60 },
    });
  });
});
