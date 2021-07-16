import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateCategory } from '../../validation/validate-category';

const getCategory = (req: Request, res: Response) => {
res.render('eligibility/category', {
  errorMap: res.locals?.errorMap || {},
  category: req.session?.eligibility?.category,
});
};

const postCategory = async (req: Request, res: Response) => {
  const { category } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    category,
  };

  let response;
  try {
    response = await validateCategory(category);
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

  res.redirect(ROUTES.ELIGIBILITY.MAKING_TAX_DIGITAL);
};

export default {
  getCategory,
  postCategory,
};
