import { NextFunction, Request, Response } from 'express';
import { mockReq, mockRes } from './mock';
import { clearPreviousRequestFromSession } from '../../../../src/middleware/clear-previous-request-from-session';

describe('lib/middleware/clear-previous-request-from-session', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = mockReq() as any as Request;
    res = mockRes() as any as Response;
    next = jest.fn() as any as NextFunction;
  });

  it('should should only impact GET requests', () => {
    const expected = 'a test value';

    req.session.previousRequest = expected;

    clearPreviousRequestFromSession(req, res, next);

    expect(req.session.previousRequest).toEqual(expected);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should clear req.session.previousRequest on a GET request', () => {
    req.method = 'GET';
    req.session.previousRequest = 'some initial value';

    clearPreviousRequestFromSession(req, res, next);

    expect(req.session.previousRequest).toEqual(undefined);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
