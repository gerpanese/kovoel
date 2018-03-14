import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';
import FlashCard from '../containers/FlashCard';
import Statistic from '../containers/Statistic';
import Ranking from '../containers/Ranking';

class App extends Component {
  constructor(args) {
    super(args);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  render() {
    switch (this.props.currentPage) {
      case 'learning':
        return (
          <div className="App">
            <FlashCard />
          </div>
        );

      case 'administration':
        return (
          <div className="App">
            administration
          </div>
        );

      case 'statistic':
        return (
          <div className="App">
            <Statistic />
          </div>
        );

      case 'ranking':
        return (
          <div className="App">
            <Ranking />
          </div>
        );

      case 'dashboard':
      default:
        return (
          <div className="App">
            <ul>
              <li onClick={event => this.changePage('learning')}>Learning</li>
              <li onClick={event => this.changePage('administration')}>Administration</li>
              <li onClick={event => this.changePage('statistic')}>Statistic</li>
              <li onClick={event => this.changePage('ranking')}>Ranking</li>
            </ul>
          </div>
        );
    }
  }
}

export default App;
