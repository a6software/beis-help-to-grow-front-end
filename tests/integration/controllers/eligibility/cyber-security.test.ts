import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/cyber-security';
import { mockReq, mockRes } from '../../../unit/lib/middleware/mock';

const mockErrorMap = { a: 'b' };

describe('controllers/eligibility/cyber-security', () => {
  describe('getTypeOfBusiness', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/cyber-security')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    [
      {
        description: 'no existing data',
        setupReq: () => mockReq() as Request,
        setupRes: () => mockRes() as any as Response,
        expectedTemplateVariables: {
          errorMap: {},
          cyberSecurity: undefined,
        },
      },
      {
        description: 'with existing data - valid',
        setupReq: () =>
          ({
            ...mockReq(),
            session: {
              eligibility: {
                cyberSecurity: true,
              },
            },
          } as Request),
        setupRes: () => mockRes() as any as Response,
        expectedTemplateVariables: {
          errorMap: {},
          cyberSecurity: true,
        },
      },
      {
        description: 'with existing data - with error map',
        setupReq: () =>
          ({
            ...mockReq(),
            session: {
              eligibility: {
                cyberSecurity: false,
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
          cyberSecurity: false,
        },
      },
    ].forEach(({ description, setupReq, setupRes, expectedTemplateVariables }) => {
      it(`should render the expected template - ${description}`, () => {
        const req = setupReq();
        const res = setupRes();

        controller.getCyberSecurity(req, res);

        expect(res.render).toHaveBeenCalledWith(
          'eligibility/cyber-security',
          expectedTemplateVariables,
        );
      });
    });
  });
});
