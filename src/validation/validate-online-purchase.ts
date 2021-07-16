import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateOnlinePurchaseSuccessResponse } from '../types';

export const validateOnlinePurchase = async (
  onlinePurchase: 'yes' | 'no',
): Promise<AxiosResponse<ValidateOnlinePurchaseSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.ONLINE_PURCHASE, {
    onlinePurchase: onlinePurchase === 'yes',
  });

export default {
  validateOnlinePurchase,
};
