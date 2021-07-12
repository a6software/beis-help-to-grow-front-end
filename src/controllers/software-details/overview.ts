import { Request, Response } from 'express';

const getOverview = (req: Request, res: Response) => {
  res.render('software-details/overview.njk', {
    errorMap: res.locals?.errorMap || {},
  });
};

export default {
  getOverview,
};
