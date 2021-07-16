export const ROUTES = {
  CREATE_ACCOUNT: {
    ACCOUNT_CREATED: '/create-account/account-created',
    EMAIL_VERIFICATION: {
      CODE_NOT_RECOGNISED: '/create-account/email-verification/code-not-recognised',
      INVALID_SESSION: '/create-account/email-verification/invalid-session',
      PENDING: '/create-account/email-verification',
    },
    SET_PASSWORD: '/create-account/set-password',
    TERMS_AND_CONDITIONS: '/create-account/terms-and-conditions',
    YOUR_DETAILS: '/create-account/your-details',
  },
  SIGN_IN: '/sign-in',
  SOFTWARE_DETAILS: {
    OVERVIEW: '/software-details/overview',
  },
};

export default {
  ROUTES,
};
