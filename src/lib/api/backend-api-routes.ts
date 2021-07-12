export const API_ROUTE = {
  CREATE_ACCOUNT: {
    CREATE: '/create-account',
    VALIDATE_TERMS_AND_CONDITIONS: '/create-account/validate-terms-and-conditions',
    VALIDATE_REPEATED_PASSWORD: '/create-account/validate-repeated-password',
    VALIDATE_YOUR_DETAILS: '/create-account/validate-your-details',
  },
  EMAIL_VERIFICATION: {
    CREATE: '/email-verification-code/create',
    VALIDATE: '/email-verification-code/validate',
  },
  SIGN_IN: '/sign-in',
  VERIFY_JWT: '/verify-jwt',
};

export default API_ROUTE;
