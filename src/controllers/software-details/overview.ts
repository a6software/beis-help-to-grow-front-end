import { Request, Response } from 'express';

const getOverview = (req: Request, res: Response) => {
  res.render('software-details/overview', {
    errorMap: res.locals?.errorMap || {},
  });
};

export default {
  getOverview,
};
