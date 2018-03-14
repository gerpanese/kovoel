import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

class CreateCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // onChange() {

  // }

  render() {
    // const test = new WebSpeechApi();
    // // hear a text
    // test.hear(
    //   'ja-JP',
    //   (text) => { test.speech(text, 'ja-JP'); },
    //   errorMessage => console.log(errorMessage),
    // );

    return (
      <div className="CreateCard">
        <input
          type="text"
          name="frontText"
          id="frontText"
          onChange={this.handleFrontTextChange}
          defaultValue=""
        />
        <input
          type="text"
          name="frontText"
          id="frontText"
          onChange={this.handleFrontTextChange}
          defaultValue=""
        />
        <button onClick={this.onClickDiscard}>DISCARD</button>
        <button onClick={this.onClickRecord}>RECORD</button>
        <button onClick={this.onClickSave}>SAVE</button>
      </div>
    );
  }
}

export default CreateCard;
