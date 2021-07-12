import { Request, Response } from 'express';

const getCompaniesHouseNumber = (req: Request, res: Response) => {
  res.render('eligibility/companies-house-number');
};

export default {
  getCompaniesHouseNumber,
};
