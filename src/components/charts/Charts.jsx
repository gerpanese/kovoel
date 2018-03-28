import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';
import UserStatistics from '../../utils/UserStatistics';
import '../../assets/css/charts.css';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.userStatistic = new UserStatistics(this.props.userStatistic);
  }

  render() {
    const currentDate = Date.now();
    const successWords = this.userStatistic.getPerMonth(currentDate);
    const allLearnedWords = this.userStatistic.getAllLerningsPerMonth(currentDate);
    const failedWords = allLearnedWords - successWords;

    return (
      <section className="statistic-charts">
        <div className="card statistic-overview">
          <div className="card-body">
            <h4 className="card-title">Monthly Data</h4>
            <RadialChart
              className="donut-chart-example"
              innerRadius={100}
              radius={140}
              getAngle={d => d.theta}
              data={[
                { theta: successWords, label: `SUCESS: ${successWords}` },
                { theta: failedWords, label: `FAILED: ${failedWords}` },
              ]}
              showLabels
              width={400}
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
