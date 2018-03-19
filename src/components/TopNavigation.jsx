import React, { Component } from 'react';
import propTypes from 'prop-types';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.gotoHomepage = this.gotoHomepage.bind(this);
    this.onScreenShow = this.onScreenShow.bind(this);
  }

  gotoHomepage() {
    this.props.changePage('landingpage');
  }

  getDashboardButton() {
    let dashboardButton = '';
    if (this.props.isUserLoggedIn) {
      dashboardButton = (
        <a
          className="btn btn-primary"
          href="#"
          onClick={() => this.props.changePage('dashboard')}
          >
          dashboard
        </a>
      );
    }
    return dashboardButton;
  }

  getLoginButton() {
    let loginButton = '';
    if (!this.props.isUserLoggedIn) {
      loginButton = (
        <a
          className="btn btn-primary"
          href="#"
          onClick={() => this.onScreenShow()}
          >
          Sign In
        </a>
      );
    }
    return loginButton;
  }

  onScreenShow() {
    // @todo use css-class
    document.getElementById('login').style.display = 'block';
  }

  render() {
    const loginButton = this.getLoginButton();
    const dashboardButton = this.getDashboardButton();

    return (
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            onClick={event=>this.gotoHomepage()}
          >
            kovoel
          </a>
          {loginButton}
          {dashboardButton}
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
