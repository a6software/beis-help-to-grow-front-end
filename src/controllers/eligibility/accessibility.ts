import { Request, Response } from 'express';

const getAccessibility = (req: Request, res: Response) => {
  res.render('eligibility/accessibility');
};

export default {
  getAccessibility,
};
