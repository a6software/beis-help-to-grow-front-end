import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateMakingTaxDigital } from '../../validation/validate-making-tax-digital';

const getMakingTaxDigital = (req: Request, res: Response) => {
  res.render('eligibility/making-tax-digital', {
    errorMap: res.locals?.errorMap || {},
    makingTaxDigital: req.session?.eligibility?.makingTaxDigital,
  });
};

const postMakingTaxDigital = async (req: Request, res: Response) => {
  const { makingTaxDigital } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    makingTaxDigital,
  };

  let response;
  try {
    response = await validateMakingTaxDigital(makingTaxDigital);
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.ELIGIBILITY.DROP_OUT);
    return;
  }

  res.redirect(ROUTES.ELIGIBILITY.MTD_WARNING);
};

export default {
  getMakingTaxDigital,
  postMakingTaxDigital,
};
