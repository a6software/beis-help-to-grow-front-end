import API_ROUTE from '../../../src/lib/backend-api-routes';

describe('lib/backend-api-routes', () => {
  // not the world's greatest unit test, but proves we have something that looks like a logger.
  it('should define the expected routes', () => {
    expect(API_ROUTE).toEqual({
      CREATE_ACCOUNT: {
        VALIDATE_TERMS_AND_CONDITIONS: '/create-account/validate-terms-and-conditions',
        VALIDATE_YOUR_DETAILS: '/create-account/validate-your-details',
      },
      SIGN_IN: '/sign-in',
      VERIFY_JWT: '/verify-jwt',
    });
  });
});
