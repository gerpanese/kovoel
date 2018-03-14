import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';
import FlashCard from '../containers/FlashCard';

class App extends Component {
  render() {

    const test = new WebSpeechApi();
/*
    // speech a text
    // test.speech('owarimasho', 'ja-JP');

    // hear a text
    test.hear('ja-JP',
      (text) => { test.speech(text, 'ja-JP') } ,
      errorMessage => console.log(errorMessage));
*/
    return (
      <div className="App">
        <FlashCard />
      </div>
    );
  }
}

export default App;
