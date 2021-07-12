import { Request, Response } from 'express';
import { ROUTES } from '../../../routes/routes';
import { validateEmailVerificationCode } from '../../../lib/api/create-account/validate-email-verification-code';

const validate = async (req: Request, res: Response) => {
  const { emailVerificationCode } = req.params;
  const { workEmailAddress } = req.session.yourDetails;

  if (!emailVerificationCode) {
    res.redirect(ROUTES.CREATE_ACCOUNT.EMAIL_VERIFICATION.CODE_NOT_RECOGNISED);
    return;
  }

  if (!workEmailAddress) {
    res.redirect(ROUTES.CREATE_ACCOUNT.EMAIL_VERIFICATION.INVALID_SESSION);
    return;
  }

  const outcome = await validateEmailVerificationCode(workEmailAddress, emailVerificationCode);

  if (!outcome.data.success) {
    res.redirect(ROUTES.CREATE_ACCOUNT.EMAIL_VERIFICATION.CODE_NOT_RECOGNISED);
    return;
  }
  req.session.emailVerificationCode = emailVerificationCode;

  res.redirect(ROUTES.CREATE_ACCOUNT.SET_PASSWORD);
};

export default {
  validate,
};
