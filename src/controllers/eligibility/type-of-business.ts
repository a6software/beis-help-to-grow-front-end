import { Request, Response } from 'express';

const getTypeOfBusiness = (req: Request, res: Response) => {
  res.render('eligibility/type-of-business');
};

export default {
  getTypeOfBusiness,
};
