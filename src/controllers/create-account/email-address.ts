import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateEmailAddress } from '../../service/validation/validate-email-address';

const getEmailAddress = (req: Request, res: Response) => {
  res.render('create-account/email-address', {
    errorMap: res.locals?.errorMap || {},
    email: req.session?.account?.email || '',
  });
};

const postEmailAddress = async (req: Request, res: Response) => {
  const { email } = req.body;

  req.session.account = {
    ...req.session.account,
    email,
  };

  let response;
  try {
    response = await validateEmailAddress(email);
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.CREATE_ACCOUNT.EMAIL_ADDRESS);
    return;
  }

  req.session.account = {
    ...req.session.account,
    email,
  };

  res.redirect(ROUTES.CREATE_ACCOUNT.TERMS_AND_CONDITIONS);
};

export default {
  getEmailAddress,
  postEmailAddress,
};
