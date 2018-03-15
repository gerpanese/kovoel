import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Footer from '../components/Footer';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);*/

const FooterContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Footer);

export default FooterContainer;
