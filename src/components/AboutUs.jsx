import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class AboutUs extends Component {
  render() {
    // @todo delete this
    this.a = 'a';

    return (
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Team</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="shingo.jpg" alt="" />
                <h5>Shingo</h5>
                <p className="font-weight-light mb-0">
                  &#x22;This is fantastic! Thanks so much guys!&#x22;
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="ryuta.jpg" alt="" />
                <h5>Ryuta</h5>
                <p className="font-weight-light mb-0">
                  &#x22;Bootstrap is amazing. I&#x27;ve been using it to create lots
                  of super nice landing pages.&#x22;
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="christian.jpg" alt="" />
                <h5>Christian</h5>
                <p className="font-weight-light mb-0">
                  &#x22;Thanks so much for making these free resources available to us!&#x22;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AboutUs.propTypes = {
};

export default AboutUs;
