import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../../lib/backend-api-connection';
import API_ROUTE from '../../lib/backend-api-routes';
import {
  ErrorResponse,
  TermsAndConditions,
  ValidateTermsAndConditionsSuccessResponse,
} from '../../types';

export const validateTermsAndConditions = async ({
  consentToDataSharing,
  consentToTermsAndConditions,
}: TermsAndConditions): Promise<
  AxiosResponse<ValidateTermsAndConditionsSuccessResponse | ErrorResponse>
> =>
  getBackEndApiConnection().post(API_ROUTE.CREATE_ACCOUNT.VALIDATE_TERMS_AND_CONDITIONS, {
    consentToDataSharing,
    consentToTermsAndConditions,
  });

export default {
  validateTermsAndConditions,
};
