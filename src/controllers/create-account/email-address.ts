import { Request, Response } from 'express';

const getEmailAddress = (req: Request, res: Response) => {
  res.render('create-account/email-address');
};

export default {
  getEmailAddress,
};
