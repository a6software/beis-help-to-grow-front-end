export const API_ROUTE = {
  CREATE_ACCOUNT: {
    VALIDATE_EMAIL_ADDRESS: '/create-account/validate-email-address',
  },
  ELIGIBILITY: {
    CYBER_SECURITY: '/eligibility/validate-cyber-security',
    ACCESSIBILITY: '/eligibility/validate-accessibility',
    ONLINE_PURCHASE: '/eligibility/validate-online-purchase',
    CATEGORY: '/eligibility/validate-category',
    MAKING_TAX_DIGITAL: '/eligibility/validate-making-tax-digital',
    MTD_WARNING: '/eligibility/validate-mtd-warning',
    RATINGS: '/eligibility/validate-ratings',
    ELIGIBILITY_COMPLETE: '/eligibility/validate-eligibility-complete',
    PHYSICAL_MEDIA: '/eligibility/validate-physical-media',
    GDPR: '/eligibility/validate-gdpr',
  },
  SIGN_IN: '/sign-in',
};

export default API_ROUTE;
