import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import AboutUs from '../components/AboutUs';

/*
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);*/

const AboutUsContainer = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(AboutUs);

export default AboutUsContainer;
