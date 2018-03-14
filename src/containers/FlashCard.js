import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlashCard from '../components/FlashCard';
import { flashCardSuccessfullyLearned, flashCardFaultyLearned } from '../actions/index';

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  languageCode: state.languageCode,
  flashCard: state.currentFlashCard,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { flashCardSuccessfullyLearned, flashCardFaultyLearned },
  dispatch,
);

const FlashCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashCard);

export default FlashCardContainer;
