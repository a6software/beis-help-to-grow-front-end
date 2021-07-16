import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateRatings } from '../../validation/validate-ratings';

const getRatings = (req: Request, res: Response) => {
res.render('eligibility/ratings', {
  errorMap: res.locals?.errorMap || {},
  ratings: req.session?.eligibility?.ratings,
});
};

const postRatings = async (req: Request, res: Response) => {
  const { ratings } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    ratings,
  };

  let response;
  try {
    response = await validateRatings(ratings);
    console.log('response', { response });
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.ELIGIBILITY.DROP_OUT);
    return;
  }

  res.redirect(ROUTES.ELIGIBILITY.ELIGIBILITY_COMPLETE);
};

export default {
  getRatings,
  postRatings,
};
