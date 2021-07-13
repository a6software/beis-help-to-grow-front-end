import { Request, Response } from 'express';

const getMtdWarning = (req: Request, res: Response) => {
  res.render('eligibility/mtd-warning');
};

export default {
  getMtdWarning,
};
