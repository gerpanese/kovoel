import { connect } from 'react-redux';
import Charts from '../../components/charts/Charts';

const mapStateToProps = state => ({
  userStatistics: state.userStatistics,
});

const ChartsContainer = connect(
  mapStateToProps,
  null,
)(Charts);

export default ChartsContainer;
