import { Request, Response } from 'express';

const getDirectorOrAuthorised = (req: Request, res: Response) => {
  res.render('create-account/director-or-authorised');
};

export default {
  getDirectorOrAuthorised,
};
