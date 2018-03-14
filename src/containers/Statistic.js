import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Statistic from '../components/Statistic';
import {} from '../actions/learning';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { },
  dispatch,
);

const StatisticContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Statistic);

export default StatisticContainer;
