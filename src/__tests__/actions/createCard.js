import {
  updateFrontText,
  updateBackText,
  saveCard,
  discardCard,
} from '../../actions/createCard';

describe('src/__tests__/actions/createCard.js', () => {
  describe('updateFrontText', () => {
    it('should create an action to update front side text', () => {
      const fakeText = 'Test updateFrontText';
      const expectedAction = {
        type: 'UPDATE_FRONT_TEXT',
        frontText: fakeText,
      };
      const actualAction = updateFrontText(fakeText);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('updateFrontText', () => {
    it('should be test something', () => {
      expect(1).toEqual(1);
    });
  });

  describe('updateFrontText', () => {
    it('should be test something', () => {
      expect(1).toEqual(1);
    });
  });

  describe('updateFrontText', () => {
    it('should be test something', () => {
      expect(1).toEqual(1);
    });
  });

});
