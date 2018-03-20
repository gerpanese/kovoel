/* global expect */
/* global it */
/* global describe */
import LearnShuffling from '../../utils/LearnShuffling';

describe('src/__tests__/utils/LearnShuffling.js', () => {
  describe('LearnShuffling.doShuffle()', () => {
    it('return the shuffled array - array with 1 entry', () => {
      const testData = [{ name: 1 }];
      const learnShuffling = new LearnShuffling(testData);
      expect(learnShuffling.doShuffle()).toEqual(testData);
    });

    it('return the shuffled array - array with 2 entries', () => {
      const testData = [{ name: 1 }, { name: 2 }];
      const testData2 = [{ name: 2 }, { name: 1 }];
      const totalOptionResults = {
        option1: false,
        option2: false,
      };

      for (let i = 0; i < 10; i += 1) {
        const learnShuffling = new LearnShuffling(testData);
        const stringifiedResponse = JSON.stringify(learnShuffling.doShuffle());

        const isValid1 = stringifiedResponse === JSON.stringify(testData);
        const isValid2 = stringifiedResponse === JSON.stringify(testData2);

        if (isValid1) {
          totalOptionResults.option1 = true;
        }
        if (isValid2) {
          totalOptionResults.option2 = true;
        }

        expect(isValid1 || isValid2).toEqual(true);
      }

      if (!totalOptionResults.option2 || !totalOptionResults.option1) {
        expect('result is not really radomized').toEqual(true);
      }
    });
  });
});
