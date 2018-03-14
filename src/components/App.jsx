import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';
// TEST IMPLEMENTATION
// Should be deleted later
import CreateCard from '../containers/CreateCard';

class App extends Component {
  testThis() {
    console.log(this);
  }

  render() {
    // const test = new WebSpeechApi();
    // speech a text
    // test.speech('owarimasho', 'ja-JP');

    // hear a text
    // test.hear(
    //   'ja-JP',
    //   (text) => { test.speech(text, 'ja-JP'); },
    //   errorMessage => console.log(errorMessage),
    // );

    return (
      <div className="App">
        Hello Gerpanese!!
        <CreateCard />
      </div>
    );
  }
}

export default App;
