import { AxiosResponse } from 'axios';
import API_ROUTE from './backend-api-routes';
import { getBackEndApiConnection } from './backend-api-connection';
import { Email, ErrorResponse, SuccessResponse } from '../../types';

export const requestEmailVerificationCode = async (
  email: Email,
): Promise<AxiosResponse<SuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.EMAIL_VERIFICATION.CREATE, {
    email,
  });

export default {
  requestEmailVerificationCode,
};
