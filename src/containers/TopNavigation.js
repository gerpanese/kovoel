import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopNavigation from '../components/TopNavigation';
import { changePage } from '../actions/dashboard';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  isUserLoggedIn: state.isUserLoggedIn,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);


const TopNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavigation);

export default TopNavigationContainer;
