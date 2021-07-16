import { AxiosResponse } from 'axios';
import API_ROUTE from './backend-api-routes';
import { ErrorResponse, JWT, SuccessResponse } from '../../types';
import { getAuthorizedBackEndApiConnection } from './backend-api-connection';

export const validateJwt = async (
  token: JWT,
): Promise<AxiosResponse<SuccessResponse | ErrorResponse>> =>
  getAuthorizedBackEndApiConnection(token).get(API_ROUTE.VERIFY_JWT);

export default {
  validateJwt,
};
