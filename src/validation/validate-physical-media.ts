import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidatePhysicalMediaSuccessResponse } from '../types';

export const validatePhysicalMedia = async (
  physicalMedia: 'yes' | 'no',
): Promise<AxiosResponse<ValidatePhysicalMediaSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.PHYSICAL_MEDIA, {
    physicalMedia: physicalMedia === 'yes',
  });

export default {
  validatePhysicalMedia,
};
