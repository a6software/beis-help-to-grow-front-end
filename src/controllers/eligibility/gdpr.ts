import { Request, Response } from 'express';

const getGdpr = (req: Request, res: Response) => {
  res.render('eligibility/gdpr');
};

export default {
  getGdpr,
};
