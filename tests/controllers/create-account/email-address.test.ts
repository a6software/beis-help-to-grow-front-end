import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../src/app';
import controller from '../../../src/controllers/create-account/email-address';

describe('controllers/create-account/email-address', () => {
  describe('getEmailAddress', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/create-account/email-address')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getEmailAddress(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('create-account/email-address');
    });
  });
});