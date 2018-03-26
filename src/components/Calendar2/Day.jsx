import React, { Component } from 'react';
import UserStatistics from '../../utils/UserStatistics';

class Day extends Component {
  constructor(args) {
    super(args);
    this.showBubble = this.showBubble.bind(this);
    this.userStatistic = new UserStatistics(this.props.userStatistic);
  }

  getClassName4DayField(learnedWords) {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
      },
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
    if (learnedWords > 3) {
      className += ' learn-more';
    } else if (learnedWords > 2) {
      className += ' learn-less';
    }
    return className;
  }

  showBubble(event) {
    event.preventDefault();
  }

  render() {
    const {
      day,
      day: {
        date,
        number,
      },
      select,
    } = this.props;

    const learnedWords = this.userStatistic.getPerDate(date.toDate());

    let bubbleMessage = '';
    if (learnedWords === 0) {
      bubbleMessage = 'not learned';
    } else {
      bubbleMessage = `${learnedWords} learned words`; 
    }
    return (
      <span 
        key={date.toString()} 
        className={this.getClassName4DayField(learnedWords)}
        onMouseOver={event => this.showBubble(event)}
        onClick={() => select(day)}>
        {number}
        <div class="bubble">
          {bubbleMessage}
        </div>
      </span>
    );
  }
}

export default Day;
