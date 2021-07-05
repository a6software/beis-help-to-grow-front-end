import request from 'supertest';
import { Request, Response } from 'express';
import app from '../../src/app';
import controller from '../../src/controllers/start-page';

describe('controllers/start-page', () => {
  describe('getStartPage', () => {
    it('should be a valid route', () => {
      request(app)
        .get('/')
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

      controller.getStartPage(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('start');
    });
  });
});
