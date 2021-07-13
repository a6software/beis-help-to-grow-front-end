import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/making-tax-digital';

describe('controllers/eligibility/making-tax-digital', () => {
  describe('getMakingTaxDigital', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/making-tax-digital')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getMakingTaxDigital(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/making-tax-digital');
    });
  });
});
