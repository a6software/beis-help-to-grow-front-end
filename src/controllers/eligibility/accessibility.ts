import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateAccessibility } from '../../validation/validate-accessibility';

const getAccessibility = (req: Request, res: Response) => {
  console.log('XXXXXXXX', req.session.eligibility);

res.render('eligibility/accessibility', {
  errorMap: res.locals?.errorMap || {},
  accessibility: req.session?.eligibility?.accessibility,
});
};

const postAccessibility = async (req: Request, res: Response) => {
  const { 'accessibility': accessibility } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    accessibility,
  };

  let response;
  try {
    response = await validateAccessibility(accessibility);
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

  res.redirect(ROUTES.ELIGIBILITY.ONLINE_PURCHASE);
};

export default {
  getAccessibility,
  postAccessibility,
};
