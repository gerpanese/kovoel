import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateFrontText,
    updateBackText,
    saveCard,
    discardCard,
  },
  dispatch,
);

const CreateCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCard);

export default CreateCardContainer;
