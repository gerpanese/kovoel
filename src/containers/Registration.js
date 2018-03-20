import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/Registration';
import { changePage } from '../actions/dashboard';


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const RegistrationContainer = connect(
  null,
  mapDispatchToProps,
)(Registration);

export default RegistrationContainer;
