import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadialChart, Hint } from 'react-vis';

import '../../assets/css/charts.css';

class Charts extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <section className="statistic-charts">
        <div className="card statistic-overview">
          <div className="card-body">
            <h4 className="card-title">Overview</h4>
            <RadialChart
              className="donut-chart-example"
              innerRadius={100}
              radius={140}
              getAngle={d => d.theta}
              data={[
                { theta: 1, className: 'custom-class' },
                { theta: 1 },
              ]}
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    );
  }
}

Charts.propTypes = {
};

export default Charts;
