import { AxiosResponse } from 'axios';
import { getBackEndApiConnection } from '../lib/api/backend-api-connection';
import API_ROUTE from '../lib/backend-api-routes';
import { ErrorResponse, ValidateMakingTaxDigitalSuccessResponse } from '../types';

export const validateMakingTaxDigital = async (
  makingTaxDigital: 'yes' | 'no',
): Promise<AxiosResponse<ValidateMakingTaxDigitalSuccessResponse | ErrorResponse>> =>
  getBackEndApiConnection().post(API_ROUTE.ELIGIBILITY.MAKING_TAX_DIGITAL, {
    makingTaxDigital: makingTaxDigital === 'yes',
  });

export default {
  validateMakingTaxDigital,
};
