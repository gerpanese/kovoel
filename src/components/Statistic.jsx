import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../containers/Calendar/Calendar';

class Statistic extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

Statistic.propTypes = {
};

export default Statistic;
