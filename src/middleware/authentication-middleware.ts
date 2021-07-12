import { NextFunction, Request, Response } from 'express';
import { validateJwt } from '../lib/validate-jwt';
import { COOKIE_TOKEN_KEY } from '../constants';

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  console.log(`auithhhsdfhjksdf`, req.cookies);

  const { token } = req.cookies;
  console.log(`calling authen midd`, token);

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const response = await validateJwt(token);
    console.log(`response`, response);

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
