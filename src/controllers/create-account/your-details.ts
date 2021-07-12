import { Request, Response } from 'express';
import { ROUTES } from '../../routes/routes';
import { validateYourDetails } from '../../lib/api/create-account/validate-your-details';
import { Email } from '../../types';

const getYourDetails = (req: Request, res: Response) => {
  const companyWebsiteUrl = 'http://example.com';
  const fullName = 'Michael Gove';
  const phoneNumber = '01632 960903';
  const positionInCompany = 'Chief Tea Brewer';
  const workEmailAddress: Email = 'a.new.user@example.com';

  res.render('create-account/your-details', {
    errorMap: res.locals?.errorMap || {},
    // workEmail: req.session?.account?.email || '',
    companyWebsiteUrl,
    fullName,
    phoneNumber,
    positionInCompany,
    workEmailAddress,
  });
};

const postYourDetails = async (req: Request, res: Response) => {
  const { companyWebsiteUrl, fullName, phoneNumber, positionInCompany, workEmailAddress } =
    req.body;

  req.session.yourDetails = {
    ...req.session.yourDetails,
    companyWebsiteUrl,
    fullName,
    phoneNumber,
    positionInCompany,
    workEmailAddress,
  };

  let response;
  try {
    response = await validateYourDetails({
      companyWebsiteUrl,
      fullName,
      phoneNumber,
      positionInCompany,
      workEmailAddress,
    });
    console.log(`response`, response);
  } catch (e) {
    req.log.error(e);
  } finally {
    req.session.previousRequest = response?.data || {};
  }

  if (!req.session?.previousRequest?.success) {
    res.redirect(ROUTES.CREATE_ACCOUNT.YOUR_DETAILS);
    return;
  }

  res.redirect(ROUTES.CREATE_ACCOUNT.TERMS_AND_CONDITIONS);
};

export default {
  getYourDetails,
  postYourDetails,
};