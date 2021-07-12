import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { signIn } from '../../lib/sign-in';

const getSignInPage = (req: Request, res: Response) => {
  res.render('sign-in/index', {
    errorMap: res.locals?.errorMap || {},
  });
};

const postSignInCredentials = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(`{ email, password }`, { email, password });

  let response;
  try {
    response = await signIn(email, password);
  } catch (e) {
    req.log.error(e);
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
