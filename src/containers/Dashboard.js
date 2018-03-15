import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Dashboard';
import { changePage } from '../actions/dashboard';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});
*/

const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const DashboardContainer = connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;
