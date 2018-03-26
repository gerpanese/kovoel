import React, { Component } from 'react';


class DayNames extends Component {
  constructor(args) {
    super(args);
    this.weekDays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
  }

  render() {
    return (
      <div className="row day-names">
        {
          this.weekDays.map(weekday => (
            <span className="day">{weekday}</span>
          ))
        }
      </div>
    );
  }
}

export default DayNames;
