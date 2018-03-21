/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validations from '../utils/Validations';
import { signIn } from '../utils/signIn';
import '../assets/css/registration.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.closeModalBox = this.closeModalBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  hideRegistrationForm() {
    // When the user clicks anywhere outside of the modal, close it
    window.onClick = (event) => {
      if (event.target.className === 'modal') {
        event.target.style.display = 'none';
      }
    }
  }

  closeModalBox() {
    this.refs.login.style.display='none';
  }

  onSubmit(event) {
    event.preventDefault();

    const nodeEmail = this.refs.email;
    const nodePsw = this.refs.psw;
    const nodeErrorMessage = this.refs.errorMsg;
    
    nodeErrorMessage.className = '';

    const validation = new Validations(nodeEmail.value);
    if (!validation.validateEmail()) {
      // @todo implement error-handling
      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your password or email is wrong.';
      return;
    }

    if (!nodePsw.value) {
      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your password or email is wrong.';
      return;
    }
    // @todo implement the login
    signIn(nodeEmail.value, nodePsw.value);
    this.closeModalBox();
    this.props.changePage('dashboard');
    this.props.setIsLoggedIn();
  }


  render() {
    this.hideRegistrationForm();
    return (
      <div id="login" className="modal" ref='login'>
        <span onClick={() => this.closeModalBox()} className="close" title="Close Modal">&times;</span>
        <form className="modal-content" onSubmit={event => this.onSubmit(event)}>
          <div className="container">
            <h1>Sign in</h1>
            <hr />
            <div id="error-message" ref='errorMsg'>

            </div>
            <input type="text" placeholder="Enter Email" name="email" ref='email' required />

            <input type="password" placeholder="Enter Password" name="psw" ref='psw' required />

            <div className="btn-group btn-group-justified">
              <button type="button" onClick={() => this.closeModalBox()} className="btn btn-danger">Cancel</button>
              <button type="submit" className="btn btn-success">Sign in</button>
            </div>
            <div className='google-oauth'>
              <a href="/auth/google" className="btn btn-block btn-social btn-lg btn-google">
                <span className="fa fa-google"></span> Sign in with Google
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Login;
