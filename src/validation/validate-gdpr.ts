import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/api/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateGdprSuccessResponse } from '../types';

export const validateGdpr = async (
  gdpr: 'yes' | 'no',
): Promise<AxiosResponse<ValidateGdprSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.GDPR, {
    gdpr: gdpr === 'yes',
  });

export default {
  validateGdpr,
};
