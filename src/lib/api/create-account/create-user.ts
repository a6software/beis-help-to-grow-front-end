import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../backend-api-connection';
import API_ROUTE from '../backend-api-routes';
import {
  CreateUserSuccessResponse,
  Email,
  EmailVerificationCode,
  ErrorResponse,
  PlainTextPassword,
} from '../../../types';

// DO NOT USE THIS - JUST FOR DEMO

type CreateUser = {
  email: {
    email: Email;
    verificationCode: EmailVerificationCode;
  };
  password: {
    password: PlainTextPassword;
    repeatedPassword: PlainTextPassword;
  };
};

export const createUser = async ({
  email,
  password,
}: CreateUser): Promise<AxiosResponse<CreateUserSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.CREATE_ACCOUNT.CREATE, {
    email,
    password,
  });

export default {
  createUser,
};
