import { NextFunction, Request, Response } from 'express';

export const previousRequestFailureToResLocalsErrorMap = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let errorMap: { [key: string]: any } = {};

  if (req.session?.previousRequest?.success === false) {
    req.session.previousRequest.data.map(
      (error: any) => (errorMap[error.context.key as string] = error.message),
    );
  }

  res.locals.errorMap = errorMap;

  return next();
};

export default {
  previousRequestFailureToResLocalsErrorMap,
};
