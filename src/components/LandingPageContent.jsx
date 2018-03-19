import React, { Component } from 'react';
import propTypes from 'prop-types';


class LandingPageContent extends Component {
  render() {
    this.a = 'a';
    return (
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img japanTravelling" />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Japan language course</h2>
              <p className="lead mb-0">We recommend taking the Japanese language course for a unique experience on your next trip to Japan.</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 text-white showcase-img japaneseInteraction" />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Interaction</h2>
              <p className="lead mb-0">Speech with Japanese in Japanese!</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img reading" />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Learn to read</h2>
              <p className="lead mb-0">Reading Japanese is important for your next trip to Japan!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPageContent;
