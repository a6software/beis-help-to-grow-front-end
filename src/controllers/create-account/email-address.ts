import axios from 'axios';
import { Request, Response } from 'express';

const getEmailAddress = (req: Request, res: Response) => {
  res.render('create-account/email-address');
};

const postEmailAddress = async (req: Request, res: Response) => {
  let response;
  try {
    response = await axios.post(
      'http://help-to-grow-backend_node-app_1:3000/create-account/validate-email-address',
      {
        email: 'Fred',
      },
    );

    req.log.info(await response, `response`);
  } catch (e) {
    req.log.error(e);
  }

  // href: '/create-account/terms-conditions',

  res.json({ hello: 'there ' });
};

export default {
  getEmailAddress,
  postEmailAddress,
};
