import { Express } from 'express';
import { MongoDBSessionOptions } from 'connect-mongodb-session';

export type ApplicationConfiguration = {
  expressSession: {
    secret: string;
    useSecureCookie: boolean;
  };
  session: MongoDBSessionOptions;
  server: {
    port: number;
  };
};

export type ApplicationEnvironment = 'test' | 'development' | 'staging' | 'production';

export type NunjucksConfigurationOptions = {
  app: Express;
  isDev: boolean;
};
