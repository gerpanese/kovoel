import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import { changePage, setIsLoggedIn, setUserId } from '../actions/dashboard';


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage, setIsLoggedIn, setUserId },
  dispatch,
);

const LoginContainer = connect(
  null,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
