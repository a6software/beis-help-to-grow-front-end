import axios from 'axios';
import config from '../config';
import { BackEndApiConnectionOptions } from '../types';

const defaultBackEndApiConnectionOptions: BackEndApiConnectionOptions = {
  baseUrl: config.api.backend.baseUrl,
  timeout: config.api.backend.timeout,
};

export const validateStatus = (status: number) => status < 500;

export const getBackEndApiConnection = ({
  baseUrl,
  timeout,
}: BackEndApiConnectionOptions = defaultBackEndApiConnectionOptions) => {
  return axios.create({
    baseURL: baseUrl,
    timeout,
    validateStatus,
  });
};

export default {
  getBackEndApiConnection,
};
