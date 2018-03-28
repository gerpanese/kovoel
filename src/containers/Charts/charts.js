import { connect } from 'react-redux';
import Charts from '../../components/charts/Charts';

const mapStateToProps = state => ({
  userStatistic: state.userStatistic,
});

const ChartsContainer = connect(
  mapStateToProps,
  null,
)(Charts);

export default ChartsContainer;
