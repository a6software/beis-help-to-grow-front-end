import { ApplicationEnvironment } from '../types';

const getApplicationEnvironment = (): ApplicationEnvironment =>
  process.env.NODE_ENV as ApplicationEnvironment;

export default getApplicationEnvironment;
