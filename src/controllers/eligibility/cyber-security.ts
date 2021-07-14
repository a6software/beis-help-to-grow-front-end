import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateCyberSecurity } from '../../validation/validate-cyber-security';

const getCyberSecurity = (req: Request, res: Response) => {
  res.render('eligibility/cyber-security', {
    errorMap: res.locals?.errorMap || {},
    cyberSecurity: req.session?.eligibility?.cyberSecurity,
  });
};

const postCyberSecurity = async (req: Request, res: Response) => {
  const { 'cyber-security': cyberSecurity } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    cyberSecurity,
  };

  let response;
  try {
    response = await validateCyberSecurity(cyberSecurity);
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.ELIGIBILITY.DROP_OUT);
    return;
  }

  res.redirect(ROUTES.ELIGIBILITY.ACCESSIBILITY);
};

export default {
  getCyberSecurity,
  postCyberSecurity,
};
