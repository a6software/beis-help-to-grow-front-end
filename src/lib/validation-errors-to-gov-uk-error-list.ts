import { GovUkErrorSummaryItem, ValidationErrorMap } from '../types';

export const validationErrorsToGovUkErrorList = (
  validationErrors: ValidationErrorMap,
): GovUkErrorSummaryItem[] =>
  Object.entries(validationErrors).map(([key, value]) => ({
    text: value,
    href: `#${key}`,
  }));

export default {
  validationErrorsToGovUkErrorList,
};
