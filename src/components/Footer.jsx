import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(event, page) {
    event.preventDefault();
    this.props.changePage(page);
  }

  render() {
    return (
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#" onClick={event => this.changePage(event, 'landingPage')}>Homepage</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">&copy; Kovoel 2018. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fa fa-facebook fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fa fa-twitter fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram fa-2x fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Footer;
