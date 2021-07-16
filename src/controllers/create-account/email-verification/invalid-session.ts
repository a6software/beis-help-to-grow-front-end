import { Request, Response } from 'express';

const getInvalidSessionError = (req: Request, res: Response) => {
  res.render('create-account/email-verification/invalid-session');
};

export default {
  getInvalidSessionError,
};
