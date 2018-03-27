/* global expect */
/* global it */
/* global describe */
/* global jest */
import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import CreateCardContainer from '../../containers/CreateCard';

const mockStore = configureStore();

describe('CreateCardContainer', () => {
  let wrapper;
  let store;

  it('maps state and dispatch to props', () => {
    store = mockStore(1);
    store.dispatch = jest.fn();
    wrapper = shallow(<CreateCardContainer store={store}/>);

    const mapStateToProps = {
      cardId: 0,
      frontText: 'front text',
      backText: 'back test',
    };
    expect(wrapper.props(mapStateToProps)).toEqual(expect.objectContaining(null));
  });
});
