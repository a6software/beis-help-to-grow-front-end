import { validationErrorsToGovUkErrorList } from '../../../src/lib/validation-errors-to-gov-uk-error-list';
import { ValidationErrorMap } from '../../../src/types';

describe('lib/validation-errors-to-gov-uk-error-list', () => {
  [
    {
      description: 'an empty object yields an empty list',
      given: {},
      expected: [],
    },
    {
      description: 'one item',
      given: {
        email: 'some value',
      } as ValidationErrorMap,
      expected: [
        {
          text: 'some value',
          href: '#email',
        },
      ],
    },
    {
      description: 'multiple items',
      given: {
        email: 'some value',
        password: 'another value',
        whateverGoesHere: 'should be the text',
      } as ValidationErrorMap,
      expected: [
        {
          text: 'some value',
          href: '#email',
        },
        {
          text: 'another value',
          href: '#password',
        },
        {
          text: 'should be the text',
          href: '#whateverGoesHere',
        },
      ],
    },
  ].forEach(({ description, given, expected }) => {
    it(description, () => {
      expect(validationErrorsToGovUkErrorList(given)).toEqual(expected);
    });
  });
});
