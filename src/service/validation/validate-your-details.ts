import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../../lib/backend-api-connection';
import API_ROUTE from '../../lib/backend-api-routes';
import { Email, ErrorResponse, ValidateEmailSuccessResponse } from '../../types';

type ValidateYourDetails = {
  workEmailAddress: Email;
  companyWebsiteUrl: string;
  fullName: string;
  phoneNumber: string;
  positionInCompany: string;
};

export const validateYourDetails = async ({
  companyWebsiteUrl,
  fullName,
  phoneNumber,
  positionInCompany,
  workEmailAddress,
}: ValidateYourDetails): Promise<AxiosResponse<ValidateEmailSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.CREATE_ACCOUNT.VALIDATE_YOUR_DETAILS, {
    companyWebsiteUrl,
    fullName,
    phoneNumber,
    positionInCompany,
    workEmailAddress,
  });

export default {
  validateEmailAddress: validateYourDetails,
};
