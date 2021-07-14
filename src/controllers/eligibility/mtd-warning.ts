import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';

const getMtdWarning = (req: Request, res: Response) => {
  res.render('eligibility/mtd-warning', {
    errorMap: res.locals?.errorMap || {},
    mtdWarning: req.session?.eligibility?.mtdWarning,
  });
};

const postMtdWarning = async (req: Request, res: Response) => {
  const { 'mtd-warning': mtdWarning } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    mtdWarning,
  };

  res.redirect(ROUTES.ELIGIBILITY.RATINGS);
};

export default {
  getMtdWarning,
  postMtdWarning,
};
