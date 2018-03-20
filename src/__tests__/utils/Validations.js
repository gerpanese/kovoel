/* global expect */
/* global it */
/* global describe */
import Validations from '../../utils/Validations';


describe('todos Validations', () => {
  it('validateEmail() - method', () => {
    const testCases = [
      {
        testString: 'bla bla',
        expectedResult: false,
      },
      {
        testString: 'christian.de',
        expectedResult: false,
      },
      {
        testString: 'christian@gmail.com',
        expectedResult: true,
      },
      {
        testString: 'christian@g.com',
        expectedResult: true,
      },
      {
        testString: 'christian@g.c',
        expectedResult: false,
      },
      {
        testString: 'cn@g.com',
        expectedResult: true,
      },
      {
        testString: 'christian@gmail',
        expectedResult: false,
      },

    ];

    testCases.forEach((testCase) => {
      // setup
      const validations = new Validations(testCase.testString);

      // Assert
      expect(validations.validateEmail()).toEqual(testCase.expectedResult);
    });
  });
});

