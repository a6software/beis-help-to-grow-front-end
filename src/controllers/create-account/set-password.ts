import { Request, Response } from 'express';

const getPassword = (req: Request, res: Response) => {
  res.render('create-account/set-password');
};

export default {
  getPassword,
};
