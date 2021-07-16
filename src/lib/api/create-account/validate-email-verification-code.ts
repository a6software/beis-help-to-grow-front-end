import { AxiosResponse } from 'axios';
import API_ROUTE from '../backend-api-routes';
import { getBackEndApiConnection } from '../backend-api-connection';
import { Email, EmailVerificationCode, ErrorResponse, SuccessResponse } from '../../../types';

export const validateEmailVerificationCode = async (
  email: Email,
  verificationCode: EmailVerificationCode,
): Promise<AxiosResponse<SuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.EMAIL_VERIFICATION.VALIDATE, {
    email,
    verificationCode,
  });

export default {
  validateEmailVerificationCode,
};
