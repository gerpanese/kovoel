import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../components/Footer';
import { changePage } from '../actions/dashboard';


const mapDispatchToProps = dispatch => bindActionCreators(
  { changePage },
  dispatch,
);

const FooterContainer = connect(
  null,
  mapDispatchToProps,
)(Footer);

export default FooterContainer;
