import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Header from '../components/Header';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);*/

const HeaderContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Header);

export default HeaderContainer;
