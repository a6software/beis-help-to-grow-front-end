import { NextFunction, Request, Response } from 'express';
import { mockReq, mockRes } from './mock';
import { previousRequestFailureToResLocalsErrorMap } from '../../../../src/middleware/previous-request-failure-to-res-locals-error-map';

describe('lib/middleware/previous-request-failure-to-res-locals-error-map', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = mockReq() as any as Request;
    res = mockRes() as any as Response;
    next = jest.fn() as any as NextFunction;
  });

  it('should set res.locals.errorMap to an empty object if the previous request was undefined', () => {
    req.session.previousRequest = undefined;

    previousRequestFailureToResLocalsErrorMap(req, res, next);

    expect(res.locals.errorMap).toEqual({});
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should set res.locals.errorMap to an empty object if the previous request was successful', () => {
    req.session.previousRequest = {
      success: true,
    };

    previousRequestFailureToResLocalsErrorMap(req, res, next);

    expect(res.locals.errorMap).toEqual({});
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should set res.locals.errorMap to a populated error map if the previous request was unsuccessful - single error', () => {
    const firstKey = 'this is the first key';
    const firstErrorMessage = 'this is the first error message';

    req.session.previousRequest = {
      success: false,
      data: [
        {
          context: {
            key: firstKey,
          },
          message: firstErrorMessage,
        },
      ],
    };

    previousRequestFailureToResLocalsErrorMap(req, res, next);

    expect(res.locals.errorMap).toEqual({
      [firstKey]: firstErrorMessage,
    });
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should set res.locals.errorMap to a populated error map if the previous request was unsuccessful - multiple errors', () => {
    const firstKey = 'this is the first key';
    const firstErrorMessage = 'this is the first error message';
    const secondKey = 'this is the second key';
    const secondErrorMessage = 'this is the second error message';

    req.session.previousRequest = {
      success: false,
      data: [
        {
          context: {
            key: firstKey,
          },
          message: firstErrorMessage,
        },
        {
          context: {
            key: secondKey,
          },
          message: secondErrorMessage,
        },
      ],
    };

    previousRequestFailureToResLocalsErrorMap(req, res, next);

    expect(res.locals.errorMap).toEqual({
      [firstKey]: firstErrorMessage,
      [secondKey]: secondErrorMessage,
    });
    expect(next).toHaveBeenCalledTimes(1);
  });
});
