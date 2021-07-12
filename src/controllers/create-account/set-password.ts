import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateRepeatedPassword } from '../../lib/api/create-account/validate-repeated-password';
import { createUser } from '../../lib/api/create-account/create-user';
import { COOKIE_TOKEN_KEY } from '../../constants';
import config from '../../config';

const getPassword = (req: Request, res: Response) => {
  res.render('create-account/set-password', {});
};

const setPassword = async (req: Request, res: Response) => {
  const { password, repeatedPassword } = req.body;

  let response;
  try {
    response = await validateRepeatedPassword(password, repeatedPassword);
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.CREATE_ACCOUNT.SET_PASSWORD);
    return;
  }

  // TODO JUST FOR DEMO!
  response = await createUser({
    email: {
      email: req.session.yourDetails.workEmailAddress,
      verificationCode: req.session.emailVerificationCode,
    },
    password: {
      password,
      repeatedPassword,
    },
  });

  if (response.data.success) {
    res.cookie(COOKIE_TOKEN_KEY, response.data.data.jwt, {
      expires: new Date(Date.now() + config.cookies.expires),
      secure: config.cookies.secure,
    });
  }

  res.redirect(ROUTES.CREATE_ACCOUNT.ACCOUNT_CREATED);
};

export default {
  getPassword,
  setPassword,
};
