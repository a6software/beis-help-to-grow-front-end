import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { signIn } from '../../lib/sign-in';
import config from '../../config';
import { COOKIE_TOKEN_KEY } from '../../constants';

const getSignInPage = (req: Request, res: Response) => {
  res.render('sign-in/index', {
    errorMap: res.locals?.errorMap || {},
  });
};

const postSignInCredentials = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let response;
  try {
    response = await signIn(email, password);

    if (response.data.success) {
      res.cookie(COOKIE_TOKEN_KEY, response.data.data.token, {
        expires: new Date(Date.now() + config.cookies.expires),
        secure: config.cookies.secure,
      });
    }
  } catch (e) {
    req.log.error(e);
    res.clearCookie(COOKIE_TOKEN_KEY);
  } finally {
    console.log(response, 'sdgffffffffffffff');
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.SIGN_IN);
    return;
  }

  res.redirect(ROUTES.SOFTWARE_DETAILS.OVERVIEW);
};

export default {
  getSignInPage,
  postSignInCredentials,
};
