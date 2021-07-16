import { Express } from 'express';
import { MongoDBSessionOptions } from 'connect-mongodb-session';

export type Email = string;
export type EmailVerificationCode = string;
export type JWT = string;
export type PlainTextPassword = string;

export type ApplicationConfiguration = {
  api: {
    backend: {
      baseUrl: string;
      timeout: number;
    };
  };
  cookies: {
    secure: boolean;
    expires: number;
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
  headers?: {
    authorization: string;
  };
};

export type NunjucksConfigurationOptions = {
  app: Express;
  isDev: boolean;
};

export type YourDetails = {
  workEmailAddress: Email;
  companyWebsiteUrl: string;
  fullName: string;
  phoneNumber: string;
  positionInCompany: string;
};

export type TermsAndConditions = {
  consentToTermsAndConditions: boolean;
  consentToDataSharing: boolean;
};

declare module 'express-session' {
  export interface SessionData {
    previousRequest: { [key: string]: any };
    yourDetails: YourDetails;
    termsAndConditions: TermsAndConditions;
    emailVerificationCode: EmailVerificationCode;
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
    token: JWT;
    user: UserDetails;
  };
};

export type ValidateRepeatedPasswordSuccessResponse = SuccessResponse;

export type ValidateYourDetailsSuccessResponse = SuccessResponse & {
  data: YourDetails;
};

export type ValidateTermsAndConditionsSuccessResponse = SuccessResponse & {
  data: TermsAndConditions;
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
