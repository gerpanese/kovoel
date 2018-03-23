import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../containers/Calendar/Calendar';
import Charts from '../containers/Charts/charts';

class Statistic extends Component {
  render() {
    return (
      <div>
        <Charts />
        <Calendar />
      </div>
    );
  }
}

Statistic.propTypes = {
};

export default Statistic;
