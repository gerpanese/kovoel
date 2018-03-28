/* global expect */
/* global it */
/* global describe */
/* global jest */
import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import TopNavigationContainer from '../../containers/TopNavigation';

const mockStore = configureStore();

describe('TopNavigationContainer', () => {
  let wrapper;
  let store;

  it('maps state and dispatch to props', () => {
    store = mockStore(1);
    store.dispatch = jest.fn();
    wrapper = shallow(<TopNavigationContainer store={store}/>);

    const mapStateToProps = state => ({
      currentPage: state.currentPage,
      isUserLoggedIn: state.isUserLoggedIn,
    });

    expect(wrapper.props(mapStateToProps)).toEqual(expect.objectContaining(null));
  });
});
