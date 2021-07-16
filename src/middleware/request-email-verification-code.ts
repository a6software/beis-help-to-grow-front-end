import { NextFunction, Request, Response } from 'express';
import { requestEmailVerificationCode } from '../lib/api/request-email-verification-code';

export const requestEmailVerificationCodeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { workEmailAddress } = req.session.yourDetails;

  if (!workEmailAddress) {
    throw new Error('Missing the required session information.');
  }

  try {
    const response = await requestEmailVerificationCode(workEmailAddress);

    if (response.status !== 200) {
      req.log.error(response.data, 'Error requesting email verification code.');
      return next();
    }
  } catch (e) {
    req.log.error('Error :: requestEmailVerificationCodeMiddleware');
    return next();
  }

  return next();
};

export default {
  requestEmailVerificationCodeMiddleware,
};
