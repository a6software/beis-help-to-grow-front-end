import axios from 'axios';
import { getBackEndApiConnection, validateStatus } from '../../../src/lib/backend-api-connection';

jest.mock('axios');

describe('lib/backend-api-connection', () => {
  describe('getBackEndApiConnection', () => {
    it('should expose a configured axios instance', () => {
      getBackEndApiConnection();

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: 'http://example.dev',
        timeout: 5000,
        validateStatus,
      });
    });

    it('should allow overwriting exposed settings', () => {
      const overrideBaseUrl = 'https://something.different';
      const overrideTimeout = 6666;

      getBackEndApiConnection({
        baseUrl: overrideBaseUrl,
        timeout: overrideTimeout,
      });

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: overrideBaseUrl,
        timeout: overrideTimeout,
        validateStatus,
      });
    });
  });

  describe('validateStatus', () => {
    it('should be valid under 500', () => {
      for (let x = 0; x < 500; x += 1) {
        expect(validateStatus(x)).toBeTruthy();
      }
    });

    it('should be invalid at 500 or over', () => {
      expect(validateStatus(500)).toBeFalsy();
      expect(validateStatus(8979)).toBeFalsy();
    });
  });
});
