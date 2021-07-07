import { Request, Response } from 'express';

const getAccountCreated = (req: Request, res: Response) => {
  res.render('create-account/account-created');
};

export default {
  getAccountCreated,
};
