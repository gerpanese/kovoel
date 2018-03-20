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
    };
    const expected = {
      frontText: '',
      backText: '',
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
});
