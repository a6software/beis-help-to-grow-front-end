import { Request, Response } from 'express';

const getMakingTaxDigital = (req: Request, res: Response) => {
  res.render('eligibility/making-tax-digital');
};

export default {
  getMakingTaxDigital,
};
