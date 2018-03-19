import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ranking from '../components/Ranking';

const RankingContainer = connect(
  null,
  null,
)(Ranking);

export default RankingContainer;
