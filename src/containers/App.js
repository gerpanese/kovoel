import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changePage } from '../actions/dashboard';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
