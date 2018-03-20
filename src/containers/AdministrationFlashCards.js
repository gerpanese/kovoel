import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdministrationFlashCards from '../components/AdministrationFlashCards';
import { deleteCard } from '../actions/createCard';
import { changePage } from '../actions/dashboard';
import { getFlashCards } from '../actions/learning';


const mapStateToProps = state => ({
  flashCards: state.flashCards,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changePage,
    deleteCard,
    getFlashCards,
  },
  dispatch,
);

const AdministrationFlashCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdministrationFlashCards);

export default AdministrationFlashCardsContainer;
