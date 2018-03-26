import { connect } from 'react-redux';
import Day from '../../components/Calendar/Day';


const mapStateToProps = state => ({
  userStatistic: state.userStatistic,
});


const DayContainer = connect(
  mapStateToProps,
  null,
)(Day);

export default DayContainer;
