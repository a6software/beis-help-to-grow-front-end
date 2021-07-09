import { Request, Response } from 'express';

const getCyberSecurity = (req: Request, res: Response) => {
  res.render('eligibility/cyber-security');
};

export default {
  getCyberSecurity,
};
