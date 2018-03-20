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
  cardId: state.currentFlashCard === null ?
    0 : state.currentFlashCard.id,

  frontText: state.currentFlashCard === null ?
    state.frontText : state.currentFlashCard.preview,

  backText: state.currentFlashCard === null ?
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
