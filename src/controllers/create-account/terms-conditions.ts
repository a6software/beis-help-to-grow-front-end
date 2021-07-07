import { Request, Response } from 'express';

const getTermsAndConditions = (req: Request, res: Response) => {
  res.render('create-account/terms-conditions');
};

export default {
  getTermsAndConditions,
};
