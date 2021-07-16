import { AxiosResponse } from 'axios';
import API_ROUTE from '../backend-api-routes';
import { getBackEndApiConnection } from '../backend-api-connection';
import { ErrorResponse, PlainTextPassword, SuccessResponse } from '../../../types';

export const validateRepeatedPassword = async (
  password: PlainTextPassword,
  repeatedPassword: PlainTextPassword,
): Promise<AxiosResponse<SuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.CREATE_ACCOUNT.VALIDATE_REPEATED_PASSWORD, {
    password,
    repeatedPassword,
  });

export default {
  validateRepeatedPassword,
};
