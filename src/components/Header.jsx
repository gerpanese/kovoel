/* global document */
import React, { Component } from 'react';
import Registration from '../containers/Registration';
import PropTypes from 'prop-types';


class Header extends Component {  
  constructor(props) {
    super(props);
    this.onScreenShow = this.onScreenShow.bind(this);
  }

  onScreenShow(event) {
    event.preventDefault();
    document.getElementById('id01').style.display = 'block';
  }

  getRegistrationButton() {
    let registrationButton = '';

    if (!this.props.isUserLoggedIn) {
      registrationButton = (
        <div className="form-row">
          <div className="col-12 col-md-12">
            <button type="button" onClick={event => this.onScreenShow(event)} className="btn btn-block btn-lg btn-primary">Sign up!</button>
          </div>
        </div>
      );
    }

    return registrationButton;
  }

  render() {
    const registrationButton = this.getRegistrationButton();

    return (
      <header className="masthead text-white text-center">
        <Registration />
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Learn a new language and be one step ahead of others</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              {registrationButton}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
