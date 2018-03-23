import React, { Component } from 'react';
import Bubble from 'react-bubble';

class Day extends Component {
  constructor(args) {
    super(args);
    this.showBubble = this.showBubble.bind(this);
  }
  showBubble(event) {
    event.preventDefault();
    console.log(event.target);
  }
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number,
      },
      select,
      selected,
    } = this.props;

    let className = 'day';
    if (isToday) {
      className += ' today';
    }
    if (!isCurrentMonth) {
      className += ' different-month';
    }
    if (date.isSame(selected)) {
      className += ' selected';
    }
console.log(date);
    return (
      <span 
        key={date.toString()} 
        className={className}
        onMouseOver={event => this.showBubble(event)}
        onClick={() => select(day)}>
        {number}
        <div class="bubble">
          you have not been diligent! Learn more!
        </div>
      </span>
    );
  }
}

export default Day;
