/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validations from '../utils/Validations';

import '../assets/css/registration.css';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.closeModalBox = this.closeModalBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  hideRegistrationForm() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
      if (event.target.className === 'modal') {
        event.target.style.display = 'none';
      }
    }
  }

  closeModalBox() {
    document.getElementById('id01').style.display='none';
  }

  onSubmit(event) {
    event.preventDefault();

    const nodePswRepeat = document.getElementById('psw-repeat');
    const nodePsw = document.getElementById('psw');
    const nodeErrorMessage = document.getElementById('error-message');
    const nodeEmail = document.getElementById('email');

    nodeErrorMessage.className = '';

    if (nodePswRepeat.value !== nodePsw.value) {
      nodePswRepeat.value = '';
      nodePsw.value = '';

      nodePsw.focus();

      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your password input was not unique. Please repeat the process';
      return;
    }
    const validation = new Validations(nodeEmail.value);
    if (!validation.validateEmail()) {
      nodeEmail.focus();

      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your email - address is not valid.';
      return;
    }

    // @todo implement the registration

    this.closeModalBox();
    this.props.changePage('dashboard');
  }

  render() {
    this.hideRegistrationForm();
    return (
      <div id="id01" className="modal">
        <span onClick={() => this.closeModalBox()} className="close" title="Close Modal">&times;</span>
        <form className="modal-content" onSubmit={event => this.onSubmit(event)}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <div id="error-message">

            </div>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />

            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="button" onClick={() => this.closeModalBox()} className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Registration;
