import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/create-account/verification';

describe('controllers/create-account/verification', () => {
  describe('getVerification', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/create-account/verification')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getVerification(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('create-account/verification');
    });
  });
});
