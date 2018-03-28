/* global expect */
/* global it */
/* global describe */
/* global jest */
import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import DayContainer from '../../../containers/Calendar/Day';

const mockStore = configureStore();

describe('DayContainer', () => {
  let wrapper;
  let store;

  it('maps state and dispatch to props', () => {
    store = mockStore(1);
    store.dispatch = jest.fn();
    wrapper = shallow(<DayContainer store={store}/>);

    
    const mapStateToProps = state => ({
      userStatistic: state.userStatistic,
    });
    expect(wrapper.props(mapStateToProps)).toEqual(expect.objectContaining(null));
  });
});
