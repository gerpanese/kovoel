import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import App from '../components/App.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleApp = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(App);

export default VisibleApp;
