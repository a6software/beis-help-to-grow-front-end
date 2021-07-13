import { Request, Response } from 'express';

const getCategory = (req: Request, res: Response) => {
  res.render('eligibility/category');
};

export default {
  getCategory,
};
