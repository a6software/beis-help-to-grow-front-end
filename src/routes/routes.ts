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
  ELIGIBILITY: {
    ACCESSIBILITY: '/eligibility/accessibility',
    CYBER_SECURITY: '/eligibility/cyber-security',
    ONLINE_PURCHASE: '/eligibility/online-purchase',
    CATEGORY: '/eligibility/category',
    MAKING_TAX_DIGITAL: '/eligibility/making-tax-digital',
    MTD_WARNING: '/eligibility/mtd-warning',
    RATINGS: '/eligibility/ratings',
    ELIGIBILITY_COMPLETE: '/eligibility/eligibility-complete',
    PHYSICAL_MEDIA: '/eligibility/physical-media',
    GDPR: '/eligibility/gdpr',
    DROP_OUT: '/eligibility/drop-out',
  },
  SIGN_IN: '/sign-in',
  SOFTWARE_DETAILS: {
    OVERVIEW: '/software-details/overview',
  },
};

export default {
  ROUTES,
};
