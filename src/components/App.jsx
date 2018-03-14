import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

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
      Hello Gerpanese!!

      </div>
    );
  }
}

export default App;
