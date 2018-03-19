import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import LandingPageContent from '../components/LandingPageContent';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);*/

const LandingPageContentContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(LandingPageContent);

export default LandingPageContentContainer;
