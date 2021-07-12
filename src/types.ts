import { Express } from 'express';
import { MongoDBSessionOptions } from 'connect-mongodb-session';

export type Email = string;

export type ApplicationConfiguration = {
  api: {
    backend: {
      baseUrl: string;
      timeout: number;
    };
  };
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

export type BackEndApiConnectionOptions = {
  baseUrl: string;
  timeout: number;
};

export type NunjucksConfigurationOptions = {
  app: Express;
  isDev: boolean;
};

declare module 'express-session' {
  export interface SessionData {
    previousRequest: { [key: string]: any };
    account: {
      email: Email;
    };
  }
}

export type UserDetails = {
  email: Email;
};

export type ErrorResponse = {
  success: false;
  error: {
    msg: string;
  };
};

export type SuccessResponse = {
  success: true;
};

export type SignInSuccessResponse = SuccessResponse & {
  data: {
    token: string;
    user: UserDetails;
  };
};

export type ValidateEmailSuccessResponse = SuccessResponse & {
  data: {
    email: Email;
  };
};

export type ValidationError = {
  message: string;
  path: string[];
  type: string;
  context: {
    value: string;
    invalids: string[];
    label: string;
    key: string;
  };
};

export type GovUkErrorSummaryItem = {
  text: string;
  href: string;
};

export type ValidationErrorMap = { [key: string]: string };
