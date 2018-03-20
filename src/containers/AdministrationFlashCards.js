import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdministrationFlashCards from '../components/AdministrationFlashCards';
import { deleteCard, updateCard } from '../actions/createCard';
import { changePage } from '../actions/dashboard';


const mapStateToProps = state => ({
  flashCards: state.flashCards,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changePage,
    deleteCard,
    updateCard,
  },
  dispatch,
);

const AdministrationFlashCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdministrationFlashCards);

export default AdministrationFlashCardsContainer;
