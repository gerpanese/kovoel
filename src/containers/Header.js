import { connect } from 'react-redux';
import Header from '../components/Header';


const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn,
});


const HeaderContainer = connect(
  mapStateToProps,
  null,
)(Header);

export default HeaderContainer;
