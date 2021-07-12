import { NextFunction, Request, Response } from 'express';

export const clearPreviousRequestFromSession = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.method === 'GET') {
    req.session.previousRequest = undefined;
  }

  return next();
};

export default {
  clearPreviousRequestFromSession,
};
