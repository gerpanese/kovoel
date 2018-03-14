import React, { Component } from 'react';
import propTypes from 'prop-types';
import CreateCard from '../containers/CreateCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello Gerpanese!!
        <CreateCard />
      </div>
    );
  }
}

export default App;
