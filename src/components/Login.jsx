import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../assets/registration.css';

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

    // @todo implement the login

    this.closeModalBox();
    this.props.changePage('dashboard');
  }

  validateEmail(email) {
    var reqEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reqEx.test(String(email).toLowerCase());
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

export default Login;
