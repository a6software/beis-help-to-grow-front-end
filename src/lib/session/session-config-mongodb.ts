import connectMongodb from 'connect-mongodb-session';
import session, { SessionOptions } from 'express-session';
import logger from '../logger';
import config from '../../config';

export default function sessionConfigMongoDb(): SessionOptions {
  const { secret, useSecureCookie } = config.expressSession;

  if (!secret) {
    throw new Error('Session secret must be set');
  }

  const MongoDBStore = connectMongodb(session);

  const store = new MongoDBStore(config.session);

  /* istanbul ignore next */
  store.on('error', (err) => {
    logger().error({ err }, 'MongoDB session store error');
  });

  return {
    store,
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: useSecureCookie,
    },
  };
}
