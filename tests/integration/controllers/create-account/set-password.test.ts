import { agent as request } from 'supertest';
import { Request, Response } from 'express';
import app from '../../../../src/app';
import controller from '../../../../src/controllers/create-account/set-password';

describe('controllers/create-account/set-password', () => {
  describe('getPassword', () => {
    it('should be a valid route', async () => {
      await request(app)
        .get('/create-account/set-password')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
    });

    it('should render the expected template', () => {
      const mockReq = jest.fn() as unknown as Request;
      const mockRes = {
        render: jest.fn(),
      } as unknown as Response;

      controller.getPassword(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('create-account/set-password');
    });
  });
});
