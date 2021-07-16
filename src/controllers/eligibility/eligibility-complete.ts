import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';

const getEligibilityComplete = (req: Request, res: Response) => {
  res.render('eligibility/eligibility-complete', {
    errorMap: res.locals?.errorMap || {},
  });
};

const postEligibilityComplete = async (req: Request, res: Response) => {

  res.redirect(ROUTES.ELIGIBILITY.ACCESSIBILITY);
};

export default {
  getEligibilityComplete,
  postEligibilityComplete,
};
