import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlashCard from '../components/FlashCard';
import { changePage } from '../actions/dashboard';
import {
  flashCardSuccessfullyLearned,
  flashCardFaultyLearned,
  shuffleFlashCards,
  getFlashCards,
} from '../actions/learning';

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  languageCode: state.languageCode,
  hasStillFlashCardsToLearn: state.shuffledFlashCards.length > 0 || Boolean(state.currentFlashCard),
  flashCard: state.currentFlashCard,
  userId: state.userId,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changePage,
    flashCardSuccessfullyLearned,
    flashCardFaultyLearned,
    shuffleFlashCards,
    getFlashCards,
  },
  dispatch,
);

const FlashCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashCard);

export default FlashCardContainer;
