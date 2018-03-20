/* global expect */
/* global it */
/* global describe */
import {
  shuffleFlashCards,
  flashCardSuccessfullyLearned,
  flashCardFaultyLearned,
  changePage,
} from '../../actions/learning';

describe('src/__tests__/actions/learning.js', () => {
  describe('shuffleFlashCards', () => {
    it('should shuffle the flashcards', () => {
      const expectedAction = {
        type: 'SHUFFLE_FLASH_CARDS',
      };
      const actualAction = shuffleFlashCards();
      expect(actualAction).toEqual(expectedAction);
    });

    it('should save successfully learned', () => {
      const id = 99;
      const expectedAction = {
        type: 'FLASH_CARD_SUCESSFULLY_LEARNED',
        id,
      };
      const actualAction = flashCardSuccessfullyLearned(id);
      expect(actualAction).toEqual(expectedAction);
    });

    it('should save faulty learned', () => {
      const id = 99;
      const expectedAction = {
        type: 'FLASH_CARD_FAULTY_LEARNED',
        id,
      };
      const actualAction = flashCardFaultyLearned(id);
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
