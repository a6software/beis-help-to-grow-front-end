import { Request, Response } from 'express';

const getRatings = (req: Request, res: Response) => {
  res.render('eligibility/ratings');
};

export default {
  getRatings,
};
