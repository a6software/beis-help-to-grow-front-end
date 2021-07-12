import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/create-account/email-address';
import { ROUTES } from '../../../../src/routes/routes';
import { mockReq, mockRes } from '../../../unit/lib/middleware/mock';

// jest.mock('../../../../src/service/validation/validate-email-address');
import API_ROUTE from '../../../../src/lib/backend-api-routes';

const mockAxios = new MockAdapter(axios);

const mockEmailValue = 'sally@example.com';
const mockErrorMap = { a: 'b' };

const CONTENT_TYPE_HTML = 'text/html; charset=utf-8';
const CONTENT_TYPE_TEXT_PLAIN = 'text/plain; charset=utf-8';

describe('controllers/create-account/email-address', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('getEmailAddress', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS)
        .expect('Content-Type', CONTENT_TYPE_HTML)
        .expect(200);
    });

    [
      {
        description: 'no existing data',
        setupReq: () => mockReq() as Request,
        setupRes: () => mockRes() as any as Response,
        expectedTemplateVariables: {
          errorMap: {},
          email: '',
        },
      },
      {
        description: 'with existing data',
        setupReq: () =>
          ({
            ...mockReq(),
            session: {
              account: {
                email: mockEmailValue,
              },
            },
          } as Request),
        setupRes: () => mockRes() as any as Response,
        expectedTemplateVariables: {
          errorMap: {},
          email: mockEmailValue,
        },
      },
      {
        description: 'with existing data',
        setupReq: () =>
          ({
            ...mockReq(),
            session: {
              account: {
                email: mockEmailValue,
              },
            },
          } as Request),
        setupRes: () =>
          ({
            ...mockRes(),
            locals: {
              errorMap: mockErrorMap,
            },
          } as any as Response),
        expectedTemplateVariables: {
          errorMap: mockErrorMap,
          email: mockEmailValue,
        },
      },
    ].forEach(({ description, setupReq, setupRes, expectedTemplateVariables }) => {
      it(`should render the expected template - ${description}`, () => {
        const req = setupReq();
        const res = setupRes();

        controller.getEmailAddress(req, res);

        expect(res.render).toHaveBeenCalledWith(
          'create-account/email-address',
          expectedTemplateVariables,
        );
      });
    });
  });

  describe('postEmailAddress', () => {
    it('should be a valid route', async () => {
      await request(app)
        .post(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS)
        .expect('Content-Type', CONTENT_TYPE_TEXT_PLAIN)
        .expect(302);
    });

    [
      () => mockAxios.onPost(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS).timeout(),
      () => mockAxios.onPost(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS).networkError(),
      () => mockAxios.onPost(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS).abortRequest(),
    ].forEach((failure) => {
      it(`should redirect to GET ${ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS} if the validateEmailAddress fails`, async () => {
        failure();

        await request(app)
          .post(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS)
          .expect('Content-Type', CONTENT_TYPE_TEXT_PLAIN)
          .expect(302)
          .expect('Location', ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS);
      });
    });

    it(`should redirect to GET ${ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS} if req.body.email fails validation`, async () => {
      const mockValidationFailureData = [{ a: 'b', c: 'd' }];
      mockAxios.onPost(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS).replyOnce(400, {
        success: false,
        data: mockValidationFailureData,
      });

      await request(app)
        .post(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS)
        .expect('Content-Type', CONTENT_TYPE_TEXT_PLAIN)
        .expect(302)
        .expect('Location', ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS);
    });

    it(`should redirect to GET ${ROUTES.CREATE_ACCOUNT.TERMS_AND_CONDITIONS} if valid`, async () => {
      mockAxios.onPost(API_ROUTE.CREATE_ACCOUNT.VALIDATE_EMAIL_ADDRESS).replyOnce(201, {
        success: true,
      });

      await request(app)
        .post(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS)
        .expect('Content-Type', CONTENT_TYPE_TEXT_PLAIN)
        .expect(302)
        .expect('Location', ROUTES.CREATE_ACCOUNT.TERMS_AND_CONDITIONS);
    });
  });
});
