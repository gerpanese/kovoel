/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validations from '../utils/Validations';
import { createUser } from '../utils/createUser'
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
      if (event.target.className === 'gray') {
        Array.from(document.getElementsByClassName('modal')).forEach(node => 
          node.style.display = 'none'
        );
      }
    }
  }

  closeModalBox() {
    // document.getElementById('id01').style.display='none';
    this.refs.id01.style.display='none';
  }

  onSubmit(event) {
    event.preventDefault();

    const nodeFirstname = this.refs.firstname;
    const nodeLastname = this.refs.lastname;
    const nodeEmail = this.refs.email;
    const nodePsw = this.refs.psw;
    const nodePswRepeat = this.refs.pswRepeat;
    const nodeErrorMessage = this.refs.errorMsg;
    
    nodeErrorMessage.className = '';

    if(!nodeFirstname.value) {
      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your first name input is empty. Please repeat the process';
      return;
    }

    if(!nodeLastname.value) {
      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your last name input is empty. Please repeat the process';
      return;
    }

    const validation = new Validations(nodeEmail.value);
    if (!validation.validateEmail()) {
      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your email - address is not valid.';
      return;
    }

    if (nodePswRepeat.value !== nodePsw.value) {
      nodePswRepeat.value = '';
      nodePsw.value = '';

      nodeErrorMessage.className = 'error-message';
      nodeErrorMessage.innerHTML = 'Your password input was not unique. Please repeat the process';
      return;
    }

    // @todo implement the registration
    createUser(nodeFirstname.value, nodeLastname.value, nodeEmail.value, nodePsw.value);
    this.closeModalBox();
    this.props.changePage('dashboard');
  }

  render() {
    this.hideRegistrationForm();
    return (
      <div id="id01" className="modal" ref='id01'>
        <div className="gray"></div>
        <span onClick={() => this.closeModalBox()} className="close" title="Close Modal">&times;</span>
        <form className="modal-content" onSubmit={event => this.onSubmit(event)}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <div id="error-message" ref='errorMsg'>

            </div>
            <input type="text" placeholder="Enter Fist Name" name="firstname" ref="firstname" required />

            <input type="text" placeholder="Enter Last Name" name="lastname" ref='lastname' required />
            
            <input type="text" placeholder="Enter Email" name="email" ref='email' required />

            <input type="password" placeholder="Enter Password" name="psw" ref='psw' required />

            <input type="password" placeholder="Repeat Password" name="psw-repeat" ref='pswRepeat' required />

            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <div className="btn-group btn-group-justified">
              <button type="button" onClick={() => this.closeModalBox()} className="btn btn-danger">Cancel</button>
              <button type="submit" className="btn btn-success">Sign Up</button>
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
