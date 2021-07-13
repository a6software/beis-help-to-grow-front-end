import { Request, Response } from 'express';

const getPhysicalMedia = (req: Request, res: Response) => {
  res.render('eligibility/physical-media');
};

export default {
  getPhysicalMedia,
};
