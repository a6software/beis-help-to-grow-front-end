import pino from 'pino';
import P from 'pino';

const logger = (): P.Logger => pino();

export default logger;
