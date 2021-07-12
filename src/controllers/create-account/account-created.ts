import { Request, Response } from 'express';

const getAccountCreated = (req: Request, res: Response) => {
  console.log(`req.s`, req.session);
  res.render('create-account/account-created', {
    workEmailAddress: req.session.yourDetails.workEmailAddress,
  });
};

export default {
  getAccountCreated,
};
