import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateRepeatedPassword } from '../../lib/api/create-account/validate-repeated-password';

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

  res.redirect(ROUTES.CREATE_ACCOUNT.ACCOUNT_CREATED);
};

export default {
  getPassword,
  setPassword,
};
