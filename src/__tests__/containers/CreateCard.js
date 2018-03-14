import CreateCardContainer from '../../containers/CreateCard';
import CreateCardComponent from '../../components/CreateCard';

describe('src/containers/CreateCard', () => {
  it('should includes CreateCard component as a wrapped component', () => {
    expect(CreateCardContainer.WrappedComponent).toEqual(CreateCardComponent);
  });
});
