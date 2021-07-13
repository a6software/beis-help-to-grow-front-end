import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/mtd-warning';

describe('controllers/eligibility/mtd-warning', () => {
  describe('getMtdWarning', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/mtd-warning')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getMtdWarning(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/mtd-warning');
    });
  });
});
