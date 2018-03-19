import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import {
  updateFrontText,
  updateBackText,
  saveCard,
  updateCard,
  discardCard,
} from '../actions/createCard';

const mapStateToProps = state => ({
  cardId: state.currentFlashCard.id,

  frontText: state.currentFlashCard.preview === undefined ?
    state.frontText : state.currentFlashCard.preview,

  backText: state.currentFlashCard.translation === undefined ?
    state.backText : state.currentFlashCard.translation,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateFrontText,
    updateBackText,
    saveCard,
    updateCard,
    discardCard,
  },
  dispatch,
);

const CreateCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCard);

export default CreateCardContainer;
