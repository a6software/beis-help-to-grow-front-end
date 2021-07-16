import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateGdpr } from '../../validation/validate-gdpr';

const getGdpr = (req: Request, res: Response) => {
res.render('eligibility/gdpr', {
  errorMap: res.locals?.errorMap || {},
  gdpr: req.session?.eligibility?.gdpr,
});
};

const postGdpr = async (req: Request, res: Response) => {
  const { gdpr } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    gdpr,
  };

  let response;
  try {
    response = await validateGdpr(gdpr);
    console.log('response', { response });
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.ELIGIBILITY.DROP_OUT);
    return;
  }

  res.redirect(ROUTES.ELIGIBILITY.PHYSICAL_MEDIA);
};

export default {
  getGdpr,
  postGdpr,
};
