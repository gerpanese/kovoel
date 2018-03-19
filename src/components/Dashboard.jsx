import React, { Component } from 'react';
import propTypes from 'prop-types';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  render() {
    return (
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters" onClick={event => this.changePage('learning')}>
            <div className="col-lg-6 order-lg-2 text-white showcase-img learning" />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Learn new Words</h2>
              <p className="lead mb-0">
                Learn new Words and the pronunciation.<br />
                <a href="#">... more</a>
              </p>
            </div>
          </div>
          <div className="row no-gutters" onClick={event => this.changePage('administrationFlashCards')}>
            <div className="col-lg-6 text-white showcase-img createFlashcards" />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Administration</h2>
              <p className="lead mb-0">
                Create new Flashcards with your voice<br />
                <a href="#">... more</a>
              </p>
            </div>
          </div>
          <div className="row no-gutters" onClick={event => this.changePage('statistic')}>
            <div className="col-lg-6 order-lg-2 text-white showcase-img statistic" />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Statistics</h2>
              <p className="lead mb-0">
                See your learning statistics<br />
                <a href="#">... more</a>
              </p>
            </div>
          </div>
          <div className="row no-gutters" onClick={event => this.changePage('ranking')}>
            <div className="col-lg-6 order-lg-2 text-white showcase-img ranking" />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Ranking</h2>
              <p className="lead mb-0">
                See how much you learned compare to other users.<br />
                <a href="#">... more</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
