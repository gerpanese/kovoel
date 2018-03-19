import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.onScreenShow = this.onScreenShow.bind(this);
  }

  onScreenShow() {
    // @todo use css-class
    document.getElementById('login').style.display = 'block';
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

  render() {
    const loginButton = this.getLoginButton();
    const dashboardButton = this.getDashboardButton();

    return (
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            onClick={()=>this.props.changePage('landingpage')}
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

TopNavigation.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default TopNavigation;
