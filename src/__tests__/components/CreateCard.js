import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateCard from '../../components/CreateCard';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    frontText: '',
    backText: '',
    updateFrontText: jest.fn(),
    updateBackText: jest.fn(),
    saveCard: jest.fn(),
    discardCard: jest.fn(),
  };
  const enzymeWrapper = mount(<CreateCard {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('src/components/CreateCard.jsx', () => {
  it('should render CreateCard component', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.CreateCard').hasClass('CreateCard')).toBe(true);
  });

  it('should call updateFrontText if front side text is changed', () => {
    const { enzymeWrapper, props } = setup();
    const frontTextInput = enzymeWrapper.find('#frontText');
    expect(props.updateFrontText.mock.calls.length).toBe(0);
    frontTextInput.instance().value = 'Updated FrontText';
    frontTextInput.simulate('change');
    expect(props.updateFrontText.mock.calls.length).toBe(1);
  });

  it('should call updateBackText if back side text is changed', () => {
    const { enzymeWrapper, props } = setup();
    const backTextInput = enzymeWrapper.find('#backText');
    expect(props.updateBackText.mock.calls.length).toBe(0);
    backTextInput.instance().value = 'Updated BackText';
    backTextInput.simulate('change');
    expect(props.updateBackText.mock.calls.length).toBe(1);
  });
});

