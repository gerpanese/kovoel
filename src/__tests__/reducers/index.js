/* global expect */
/* global it */
/* global describe */
import reducer from '../../reducers/index';

describe('todos reducer', () => {
  it('should return the default state', () => {
    // Setup
    const expected = {
      frontText: '',
      backText: '',
    };

    // Exercise
    const actual = reducer(undefined, {});

    // Assert
    expect(actual.frontText).toEqual(expected.frontText);
    expect(actual.backText).toEqual(expected.backText);
  });

  it('should handle UPDATE_FRONT_TEXT', () => {
    // Setup
    const expected = {
      frontText: 'test front text',
    };
    const mockAction = {
      type: 'UPDATE_FRONT_TEXT',
      frontText: 'test front text',
    };

    // Exercise
    const actual = reducer({}, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle UPDATE_BACK_TEXT', () => {
    // Setup
    const expected = {
      backText: 'test back text',
    };
    const mockAction = {
      type: 'UPDATE_BACK_TEXT',
      backText: 'test back text',
    };

    // Exercise
    const actual = reducer({}, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle SAVE_CARD', () => {
    // Setup
    const initialState = {
      frontText: 'Existing test back text',
      backText: 'Existing test back text',
      flashCards: [{ id: 1 }, { id: 2 }],
    };
    const expected = {
      frontText: '',
      backText: '',
      flashCards: [
        { id: 1 },
        { id: 2 },
        {
          id: 3,
          preview:
          initialState.frontText,
          romanji: '',
          translation: initialState.backText,
        }],
    };
    const mockAction = {
      type: 'SAVE_CARD',
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle DISCARD_CARD', () => {
    // Setup
    const initialState = {
      frontText: 'Existing test back text',
      backText: 'Existing test back text',
    };
    const expected = {
      frontText: '',
      backText: '',
    };
    const mockAction = {
      type: 'DISCARD_CARD',
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle CHANGE_PAGE - without an id', () => {
    // Setup
    const initialState = {
      currentPage: 'Existing test back text',
      currentFlashCard: 111,
    };
    const expected = {
      currentFlashCard: null,
      currentPage: 'new',
    };
    const mockAction = {
      type: 'CHANGE_PAGE',
      page: 'new',
      id: null,
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle CHANGE_PAGE - with an id', () => {
    // Setup
    const initialState = {
      currentPage: 'Existing test back text',
      currentFlashCard: 111,
      flashCards: [{ id: 1 }],
    };
    const expected = {
      currentFlashCard: { id: 1 },
      currentPage: 'new',
      flashCards: [{ id: 1 }],
    };
    const mockAction = {
      type: 'CHANGE_PAGE',
      page: 'new',
      id: 1,
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle CHANGE_PAGE - id not existing', () => {
    // Setup
    const initialState = {
      currentPage: 'Existing test back text',
      currentFlashCard: 111,
      flashCards: [{ id: 1 }],
    };
    const expected = {
      currentFlashCard: undefined,
      currentPage: 'new',
      flashCards: [{ id: 1 }],
    };
    const mockAction = {
      type: 'CHANGE_PAGE',
      page: 'new',
      id: 2,
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle CHANGE_PAGE - id not existing', () => {
    // Setup
    const initialState = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 1 },
    };
    const expected = {
      flashCards: [],
      currentFlashCard: null,
    };
    const mockAction = {
      type: 'DELETE_CARD',
      id: 1,
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle XX - default', () => {
    // Setup
    const initialState = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 1 },
    };
    const expected = initialState;
    const mockAction = {
      type: 'XX',
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle FLASH_CARD_SUCESSFULLY_LEARNED', () => {
    // Setup
    const initialState = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 1 },
      userStatistic: [],
      shuffledFlashCards: [{ id: 2 }],
    };
    const expected = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 2 },
      userStatistic: [{ id: 1, state: 'SUCCESS', timestamp: +new Date() }],
      shuffledFlashCards: [],
    };
    const mockAction = {
      type: 'FLASH_CARD_SUCESSFULLY_LEARNED',
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should handle FLASH_CARD_FAULTY_LEARNED', () => {
    // Setup
    const initialState = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 1 },
      userStatistic: [],
    };
    const expected = {
      flashCards: [{ id: 1 }],
      currentFlashCard: { id: 1 },
      userStatistic: [{ id: 1, state: 'FAULTY', timestamp: +new Date() }],
    };
    const mockAction = {
      type: 'FLASH_CARD_FAULTY_LEARNED',
    };

    // Exercise
    const actual = reducer(initialState, mockAction);

    // Assert
    expect(actual).toEqual(expected);
  });
});
