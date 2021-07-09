import { mockReq, mockRes } from './mock';
import { NextFunction, Request, Response } from 'express';
import { previousRequestToResLocals } from '../../../../src/middleware/previous-request-to-res-locals';

describe('lib/middleware/previous-request-to-res-locals', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = mockReq() as any as Request;
    res = mockRes() as any as Response;
    next = jest.fn() as any as NextFunction;
  });

  it('should set res.locals.previousRequest to req.session.previousRequest if defined', () => {
    const initialValue = 'some initial value';

    res.locals.previousRequest = initialValue;
    req.session.previousRequest = undefined;

    previousRequestToResLocals(req, res, next);

    expect(res.locals.previousRequest).toEqual(initialValue);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should not change res.locals.previousRequest if req.session.previousRequest is not defined', () => {
    const initialValue = 'some initial value';
    res.locals.previousRequest = initialValue;

    const previousRequest = { some: 'data' };
    req.session.previousRequest = previousRequest;

    previousRequestToResLocals(req, res, next);

    expect(res.locals.previousRequest).toEqual(previousRequest);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
