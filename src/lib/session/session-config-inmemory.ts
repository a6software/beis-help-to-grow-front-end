import { SessionOptions } from 'express-session';
import config from '../../config';

export default function sessionConfigInMemory(): SessionOptions {
  const { secret } = config.expressSession;

  if (!secret) {
    throw new Error('Session secret must be set');
  }

  return {
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  };
}
