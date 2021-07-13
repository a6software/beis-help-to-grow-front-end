import { Request, Response } from 'express';

const getOnlinePurchase = (req: Request, res: Response) => {
  res.render('eligibility/online-purchase');
};

export default {
  getOnlinePurchase,
};
