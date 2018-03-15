import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import LandingPageTeaser from '../components/LandingPageTeaser';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);*/

const LandingPageTeaserContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(LandingPageTeaser);

export default LandingPageTeaserContainer;
