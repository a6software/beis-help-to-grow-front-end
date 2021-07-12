import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';

const getDirectorOrAuthorised = (req: Request, res: Response) => {
  res.render('create-account/director-or-authorised');
};

const postDirectorOrAuthorised = (req: Request, res: Response) => {
  res.redirect(ROUTES.CREATE_ACCOUNT.YOUR_DETAILS);
};

export default {
  getDirectorOrAuthorised,
  postDirectorOrAuthorised,
};
