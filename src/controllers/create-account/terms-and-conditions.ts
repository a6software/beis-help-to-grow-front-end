import { Request, Response } from 'express';
import { validateTermsAndConditions } from '../../validation/create-account/validate-terms-and-conditions';
import { ROUTES } from '../../routes/routes';

const getTermsAndConditions = (req: Request, res: Response) => {
  const consentToTermsAndConditions = true;
  const consentToDataSharing = false;

  res.render('create-account/terms-and-conditions', {
    errorMap: res.locals?.errorMap || {},
    consentToTermsAndConditions,
    consentToDataSharing,
  });
};

const postTermsAndConditions = async (req: Request, res: Response) => {
  const { consentToTermsAndConditions, consentToDataSharing } = req.body;

  req.session.termsAndConditions = {
    ...req.session.termsAndConditions,
    consentToDataSharing,
    consentToTermsAndConditions,
  };

  let response;
  try {
    response = await validateTermsAndConditions({
      consentToTermsAndConditions,
      consentToDataSharing,
    });
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.CREATE_ACCOUNT.TERMS_AND_CONDITIONS);
    return;
  }

  res.redirect(ROUTES.CREATE_ACCOUNT.EMAIL_VERIFICATION.PENDING);
};

export default {
  getTermsAndConditions,
  postTermsAndConditions,
};
