import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validatePhysicalMedia } from '../../validation/validate-physical-media';

const getPhysicalMedia = (req: Request, res: Response) => {
res.render('eligibility/physical-media', {
  errorMap: res.locals?.errorMap || {},
  physicalMedia: req.session?.eligibility?.physicalMedia,
});
};

const postPhysicalMedia = async (req: Request, res: Response) => {
  const { physicalMedia } = req.body;

  req.session.eligibility = {
    ...req.session.eligibility,
    physicalMedia,
  };

  let response;
  try {
    response = await validatePhysicalMedia(physicalMedia);
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

  res.redirect(ROUTES.ELIGIBILITY.ONLINE_PURCHASE);
};

export default {
  getPhysicalMedia,
  postPhysicalMedia,
};
