import { NextFunction, Request, Response } from 'express';

export const previousRequestToResLocals = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.previousRequest) {
    res.locals.previousRequest = req.session.previousRequest;
  }

  return next();
};

export default {
  previousRequestToResLocals,
};
