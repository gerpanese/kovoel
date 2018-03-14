import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import {
  updateFrontText,
  updateBackText,
  saveCard,
  discardCard,
} from '../actions/createCard';

const mapStateToProps = state => ({
  frontText: state.frontText,
  backText: state.backText,
});

const mapDispatchToProps = dispatch => ({
  updateFrontText: frontText => dispatch(updateFrontText(frontText)),
  updateBackText: backText => dispatch(updateBackText(backText)),
  saveCard: () => dispatch(saveCard()),
  discardCard: () => dispatch(discardCard()),
});

const CreateCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCard);

export default CreateCardContainer;
