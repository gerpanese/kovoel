import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../containers/Calendar/Calendar';
import Charts from '../containers/Charts/charts';

class Statistic extends Component {
  render() {
    return (
      <div>
        <nav>
          <div
            className="nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-overview"
              role="tab"
              aria-controls="nav-overview"
              aria-selected="true"
            >
            Overview
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-calendar"
              role="tab"
              aria-controls="nav-clalendar"
              aria-selected="false"
            >
            Calendar
            </a>
          </div>
        </nav>
        <div
          className="tab-content"
          id="nav-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="nav-overview"
            role="tabpanel"
            aria-labelledby="nav-overview-tab"
          >
            <Charts />
          </div>
          <div
            className="tab-pane fade"
            id="nav-calendar"
            role="tabpanel"
            aria-labelledby="nav-calendar-tab"
          >
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

Statistic.propTypes = {
};

export default Statistic;
