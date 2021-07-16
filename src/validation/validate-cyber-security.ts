import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateCyberSecuritySuccessResponse } from '../types';

export const validateCyberSecurity = async (
  cyberSecurity: 'yes' | 'no',
): Promise<AxiosResponse<ValidateCyberSecuritySuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.CYBER_SECURITY, {
    cyberSecurity: cyberSecurity === 'yes',
  });

export default {
  validateCyberSecurity,
};
