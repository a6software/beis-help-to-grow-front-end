import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateRatingsSuccessResponse } from '../types';

export const validateRatings = async (
  ratings: 'yes' | 'no',
): Promise<AxiosResponse<ValidateRatingsSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.RATINGS, {
    ratings: ratings === 'yes',
  });

export default {
  validateRatings,
};
