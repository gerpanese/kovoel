import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validations from '../utils/Validations';

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
    document.getElementById('login').style.display='none';
  }

  onSubmit(event) {
    event.preventDefault();

    const nodeEmail = document.getElementById('email');

    const validation = new Validations(nodeEmail.value);
    if (!validation.validateEmail()) {
      // @todo implement error-handling
      return;
    }

    // @todo implement the login

    this.closeModalBox();
    this.props.changePage('dashboard');
  }


  render() {
    this.hideRegistrationForm();
    return (
      <div id="login" className="modal">
        <span onClick={() => this.closeModalBox()} className="close" title="Close Modal">&times;</span>
        <form className="modal-content" onSubmit={event => this.onSubmit(event)}>
          <div className="container">
            <h1>Sign in</h1>
            <hr />
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <div className="clearfix">
              <button type="button" onClick={() => this.closeModalBox()} className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Sign in</button>
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
