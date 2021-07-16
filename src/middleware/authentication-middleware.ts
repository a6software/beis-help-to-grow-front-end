import { NextFunction, Request, Response } from 'express';
import { validateJwt } from '../lib/api/validate-jwt';
import { COOKIE_TOKEN_KEY } from '../constants';

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const response = await validateJwt(token);

    if (response.status !== 200) {
      res.clearCookie(COOKIE_TOKEN_KEY);
      return res.sendStatus(403);
    }
  } catch (e) {
    res.clearCookie(COOKIE_TOKEN_KEY);
    return res.sendStatus(403);
  }

  return next();
};

export default {
  authentication,
};
