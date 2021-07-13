import { Request, Response } from 'express';

const getEligibilityComplete = (req: Request, res: Response) => {
  res.render('eligibility/eligibility-complete');
};

export default {
  getEligibilityComplete,
};
