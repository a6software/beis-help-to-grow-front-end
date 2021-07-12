import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/companies-house-number';

describe('controllers/eligibility/companies-house-number', () => {
  describe('getTypeOfBusiness', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/companies-house-number')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getCompaniesHouseNumber(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/companies-house-number');
    });
  });
});
