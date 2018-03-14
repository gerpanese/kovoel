import React, { Component } from 'react';
import propTypes from 'prop-types';
import FlashCard from '../containers/FlashCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlashCard />
      </div>
    );
  }
}

export default App;
