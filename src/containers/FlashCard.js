import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlashCard from '../components/FlashCard';
import {
  flashCardSuccessfullyLearned,
  flashCardFaultyLearned,
  shuffleFlashCards,
} from '../actions/learning';

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  languageCode: state.languageCode,
  hasStillFlashCardsToLearn: state.shuffledFlashCards.length > 0 || state.currentFlashCard,
  flashCard: state.currentFlashCard,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { flashCardSuccessfullyLearned, flashCardFaultyLearned, shuffleFlashCards },
  dispatch,
);

const FlashCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashCard);

export default FlashCardContainer;
