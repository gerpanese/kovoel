import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import App from '../components/App';


const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

/*
const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);
*/

const AppContainer = connect(
  mapStateToProps,
  null, // mapDispatchToProps,
)(App);

export default AppContainer;
