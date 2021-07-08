import { Request, Response } from 'express';

const getVerification = (req: Request, res: Response) => {
  res.render('create-account/verification');
};

export default {
  getVerification,
};
