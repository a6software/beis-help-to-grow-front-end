import { ApplicationConfiguration } from './types';

const config: ApplicationConfiguration = {
  api: {
    backend: {
      baseUrl: process.env.API_BACKEND_BASE_URL,
      timeout: Number(process.env.API_BACKEND_TIMEOUT || 3000),
    },
  },
  cookies: {
    secure: process.env.COOKIE_SECURE === 'true',
    expires: Number(process.env.COOKIE_EXPIRES || 24 * 60 * 60 * 1000),
  },
  expressSession: {
    secret: process.env.SESSION_KEY,
    useSecureCookie: process.env.SESSION_USE_SECURE_COOKIES === 'true',
  },
  session: {
    uri: process.env.SESSION_MONGODB_URL,
    collection: process.env.SESSION_MONGODB_COLLECTION || 'sessions',
    expires: 1000 * 60 * 60 * 24 * 14, // value in milliseconds
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  server: {
    port: Number(process.env.PORT || 3000),
  },
};

export default config;
