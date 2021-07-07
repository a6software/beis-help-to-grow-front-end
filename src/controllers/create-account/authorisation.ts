import { Request, Response } from 'express';

const getAuthorisation = (req: Request, res: Response) => {
  res.render('create-account/authorisation');
};

export default {
  getAuthorisation,
};
