import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateAccessibilitySuccessResponse } from '../types';

export const validateAccessibility = async (
  accessibility: 'yes' | 'no',
): Promise<AxiosResponse<ValidateAccessibilitySuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.ACCESSIBILITY, {
    accessibility: accessibility === 'yes',
  });

export default {
  validateAccessibility,
};
