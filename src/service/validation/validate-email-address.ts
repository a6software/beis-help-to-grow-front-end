import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../../lib/backend-api-connection';
import API_ROUTE from '../../lib/backend-api-routes';
import { Email, ErrorResponse, ValidateEmailSuccessResponse } from '../../types';

export const validateEmailAddress = async (
  email: Email,
): Promise<AxiosResponse<ValidateEmailSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS, {
    email,
  });

export default {
  validateEmailAddress,
};
