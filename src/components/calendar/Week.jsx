import React, { Component } from 'react';
import Day from '../../containers/Calendar/Day';

class Week extends Component {
  getDays() {
    const days = [];
    let { date } = this.props;
    const {
      month,
      selected,
      select,
    } = this.props;

    for (let i = 0; i < 7; i += 1) {
      const day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date,
      };
      days.push(
        <Day
        day={day}
        selected={selected}
        select={select}
        />);

      date = date.clone();
      date.add(1, 'day');
    }

    return days;
  }

  render() {
    const days = this.getDays();
    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }
}

export default Week;
