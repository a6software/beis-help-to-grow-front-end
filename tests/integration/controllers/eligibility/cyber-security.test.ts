import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/eligibility/cyber-security';

describe('controllers/eligibility/cyber-security', () => {
  describe('getTypeOfBusiness', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/eligibility/cyber-security')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getCyberSecurity(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('eligibility/cyber-security');
    });
  });
});
