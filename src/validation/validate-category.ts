import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateCategorySuccessResponse } from '../types';

export const validateCategory = async (
  category: 'yes' | 'no',
): Promise<AxiosResponse<ValidateCategorySuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.CATEGORY, {
    category: category === 'yes',
  });

export default {
  validateCategory,
};
