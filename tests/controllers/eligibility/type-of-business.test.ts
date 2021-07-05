import request from 'supertest';
import app from '../../../src/app';
import controller from '../../../src/controllers/eligibility/type-of-business';
import { Request, Response } from 'express';

describe('controllers/eligibility/type-of-business', () => {
  describe('getStartPage', () => {
    it('should be a valid route', () => {
      request(app)
        .get('/eligibility/type-of-business')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getTypeOfBusiness(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/type-of-business');
    });
  });
});
