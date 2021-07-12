import axios from 'axios';
import config from '../config';
import { BackEndApiConnectionOptions, JWT } from '../types';

const defaultBackEndApiConnectionOptions: BackEndApiConnectionOptions = {
  baseUrl: config.api.backend.baseUrl,
  timeout: config.api.backend.timeout,
};

export const validateStatus = (status: number) => status < 500;

export const getBackEndApiConnection = ({
  baseUrl,
  timeout,
  headers = undefined,
}: BackEndApiConnectionOptions = defaultBackEndApiConnectionOptions) => {
  return axios.create({
    baseURL: baseUrl,
    timeout,
    headers,
    validateStatus,
  });
};

export const getAuthorizedBackEndApiConnection = (token: JWT) =>
  getBackEndApiConnection({
    ...defaultBackEndApiConnectionOptions,
    headers: { authorization: `Bearer ${token}` },
  });

export default {
  getBackEndApiConnection,
  getAuthorizedBackEndApiConnection,
};
