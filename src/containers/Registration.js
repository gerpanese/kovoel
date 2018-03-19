import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/Registration';
import { changePage } from '../actions/dashboard';

/*
const mapStateToProps = state => ({
});
*/

const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const RegistrationContainer = connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Registration);

export default RegistrationContainer;
