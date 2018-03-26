import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changePage, setIsLoggedIn, setUserId } from '../actions/dashboard';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  isUserLoggedIn: state.isUserLoggedIn,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage, setIsLoggedIn, setUserId },
  dispatch,
);


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
