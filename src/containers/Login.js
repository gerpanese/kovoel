import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import { changePage } from '../actions/dashboard';

/*
const mapStateToProps = state => ({
});
*/

const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const LoginContainer = connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
