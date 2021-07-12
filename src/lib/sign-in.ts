import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from './backend-api-connection';
import API_ROUTE from './backend-api-routes';
import { Email, ErrorResponse, SignInSuccessResponse } from '../types';

export const signIn = async (
  email: Email,
  password: string,
): Promise<AxiosResponse<SignInSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.SIGN_IN, {
    email,
    password,
  });

export default {
  signIn,
};
