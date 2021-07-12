import { Request, Response } from 'express';

const getCompaniesHouseDetails = (req: Request, res: Response) => {
  res.render('eligibility/companies-house-details');
};

export default {
  getCompaniesHouseDetails,
};
