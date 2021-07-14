export const API_ROUTE = {
  CREATE_ACCOUNT: {
    VALIDATE_TERMS_AND_CONDITIONS: '/create-account/validate-terms-and-conditions',
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
