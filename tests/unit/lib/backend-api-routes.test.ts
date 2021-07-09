import API_ROUTE from '../../../src/lib/backend-api-routes';

describe('lib/backend-api-routes', () => {
  // not the world's greatest unit test, but proves we have something that looks like a logger.
  it('should define the expected routes', () => {
    expect(API_ROUTE).toEqual({
      CREATE_ACCOUNT: {
        VALIDATE_EMAIL_ADDRESS: '/create-account/validate-email-address',
      },
    });
  });
});
