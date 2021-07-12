import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/companies-house-details';

describe('controllers/eligibility/companies-house-details', () => {
  describe('getTypeOfBusiness', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/companies-house-details')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getCompaniesHouseDetails(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/companies-house-details');
    });
  });
});
