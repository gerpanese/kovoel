import React, { Component } from 'react';
import propTypes from 'prop-types';


class LandingPageTeaser extends Component {
  render() {
    this.a = 'a';
    return (
      <section className="features-icons bg-light text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <div className="features-icons-icon d-flex">
                        <i className="icon-screen-desktop m-auto text-primary" />
                      </div>
                      <h3>Correct pronunciation</h3>
                      <p className="lead mb-0">Learn the correct pronunciation and speak like a native speaker</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <div className="features-icons-icon d-flex">
                        <i className="icon-layers m-auto text-primary" />
                      </div>
                      <h3>language</h3>
                      <p className="lead mb-0">Learn a new language in 4 weeks!</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                      <div className="features-icons-icon d-flex">
                        <i className="icon-check m-auto text-primary" />
                      </div>
                      <h3>Vocabulary</h3>
                      <p className="lead mb-0">Ready to learn more vocabulary!</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    );
  }
}

export default LandingPageTeaser;
