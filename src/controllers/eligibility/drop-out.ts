import { Request, Response } from 'express';

const getDropOut = (req: Request, res: Response) => {
  res.render('eligibility/drop-out');
};

export default {
  getDropOut,
};
