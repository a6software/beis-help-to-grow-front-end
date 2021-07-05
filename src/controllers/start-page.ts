import { Request, Response } from 'express';

const getStartPage = (req: Request, res: Response) => {
  res.render('start');
};

export default {
  getStartPage,
};
