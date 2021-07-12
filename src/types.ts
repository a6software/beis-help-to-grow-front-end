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
    eligibility: {
      cyberSecurity: boolean;
      accessibility: boolean;
      onlinePurchase: boolean;
      category: boolean;
      makingTaxDigital: boolean;
      mtdWarning: boolean;
      ratings: boolean;
      gdpr: boolean;
      physicalMedia: boolean;
    };
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

export type CreateUserSuccessResponse = SuccessResponse & {
  data: {
    email: Email;
    jwt: JWT;
  };
};

export type ValidateAccessibilitySuccessResponse = SuccessResponse & {
  data: {
    accessibility: boolean;
  };
};

export type ValidateCyberSecuritySuccessResponse = SuccessResponse & {
  data: {
    cyberSecurity: boolean;
  };
};

export type ValidateOnlinePurchaseSuccessResponse = SuccessResponse & {
  data: {
    onlinePurchase: boolean;
  };
};

export type ValidateCategorySuccessResponse = SuccessResponse & {
  data: {
    category: boolean;
  };
};

export type ValidateMakingTaxDigitalSuccessResponse = SuccessResponse & {
  data: {
    makingTaxDigital: boolean;
  };
};

export type ValidateMtdWarningSuccessResponse = SuccessResponse & {
  data: {
    mtdWarning: boolean;
  };
};

export type ValidateRatingsSuccessResponse = SuccessResponse & {
  data: {
    ratings: boolean;
  };
};

export type ValidateEligibilityCompleteSuccessResponse = SuccessResponse & {
  data: {
    eligibilityComplete: boolean;
  };
};

export type ValidateGdprSuccessResponse = SuccessResponse & {
  data: {
    gdpr: boolean;
  };
};

export type ValidatePhysicalMediaSuccessResponse = SuccessResponse & {
  data: {
    physicalMedia: boolean;
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
