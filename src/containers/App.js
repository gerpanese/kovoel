import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changePage, setIsLoggedIn } from '../actions/dashboard';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  isUserLoggedIn: state.isUserLoggedIn,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage, setIsLoggedIn },
  dispatch,
);


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
