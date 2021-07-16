import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateOnlinePurchase } from '../../validation/validate-online-purchase';

const getOnlinePurchase = (req: Request, res: Response) => {
  res.render('eligibility/online-purchase', {
    errorMap: res.locals?.errorMap || {},
    onlinePurchase: req.session?.eligibility?.onlinePurchase,
  });
};

const postOnlinePurchase = async (req: Request, res: Response) => {
  const { onlinePurchase } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    onlinePurchase,
  };

  let response;
  try {
    response = await validateOnlinePurchase(onlinePurchase);
    console.error(JSON.stringify(response.data, null, 2));
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.ELIGIBILITY.DROP_OUT);
    return;
  }

  res.redirect(ROUTES.ELIGIBILITY.CATEGORY);
};

export default {
  getOnlinePurchase,
  postOnlinePurchase,
};