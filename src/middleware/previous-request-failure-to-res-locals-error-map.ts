import { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../types';

export const previousRequestFailureToResLocalsErrorMap = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorMap: { [key: string]: ValidationError } = {};

  if (req.session?.previousRequest?.success === false) {
    req.session.previousRequest.data.forEach((error: any) => {
      errorMap[error.context.key as string] = error.message;
    });
  }

  res.locals.errorMap = errorMap;

  next();
};

export default {
  previousRequestFailureToResLocalsErrorMap,
};
