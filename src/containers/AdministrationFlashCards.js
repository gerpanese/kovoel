import { connect } from 'react-redux';
import AdministrationFlashCards from '../components/AdministrationFlashCards';
import { deleteCard } from '../actions/createCard';
import { changePage } from '../actions/dashboard';

const mapStateToProps = state => ({
  flashCards: state.flashCards,
});

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id)),
  changePage: () => dispatch(changePage()),
});

const AdministrationFlashCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdministrationFlashCards);

export default AdministrationFlashCardsContainer;
