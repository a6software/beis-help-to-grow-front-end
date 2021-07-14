import { Request, Response } from 'express';

const getCodeNotRecognised = (req: Request, res: Response) => {
  res.render('create-account/email-verification/code-not-recognised');
};

export default {
  getCodeNotRecognised,
};
