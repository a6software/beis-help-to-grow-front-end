import { Request, Response } from 'express';

const getVerificationPending = (req: Request, res: Response) => {
  res.render('create-account/email-verification/pending', {
    workEmailAddress: req.session.yourDetails.workEmailAddress,
  });
};

export default {
  getVerificationPending,
};
