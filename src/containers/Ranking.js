import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ranking from '../components/Ranking';
import {} from '../actions/learning';

/*
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { },
  dispatch,
); */

const RankingContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Ranking);

export default RankingContainer;
