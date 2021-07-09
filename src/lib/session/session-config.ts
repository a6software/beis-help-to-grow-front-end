import { SessionOptions } from 'express-session';
import { ApplicationEnvironment } from '../../types';
import sessionConfigInMemory from './session-config-inmemory';
import sessionConfigMongoDb from './session-config-mongodb';

export default function sessionConfig(
  applicationEnvironment: ApplicationEnvironment,
): SessionOptions {
  switch (applicationEnvironment) {
    case 'test':
      return sessionConfigInMemory();
    case 'development':
    case 'staging':
    case 'production':
      return sessionConfigMongoDb();
    default:
      throw new Error(`Unrecognised application environment: ${applicationEnvironment}`);
  }
}
