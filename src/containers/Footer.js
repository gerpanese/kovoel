import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../components/Footer';
import { changePage } from '../actions/dashboard';
/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});*/


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const FooterContainer = connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Footer);

export default FooterContainer;
