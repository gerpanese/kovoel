import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { changePage } from '../actions/dashboard';
import Header from '../components/Header';


const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn,
});

/*
const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);
*/

const HeaderContainer = connect(
  mapStateToProps,
  null, // mapDispatchToProps,
)(Header);

export default HeaderContainer;
