import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.handleFrontTextChange = this.handleFrontTextChange.bind(this);
    this.handleBackTextChange = this.handleBackTextChange.bind(this);
    this.handleDiscardClick = this.handleDiscardClick.bind(this);
    this.handleRecordClick = this.handleRecordClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleDiscardClick(event) {
    event.preventDefault();
    this.props.discardCard();
  }

  handleRecordClick(event) {
    event.preventDefault();
  }

  handleSaveClick(event) {
    event.preventDefault();
    this.props.saveCard();
  }

  handleFrontTextChange(event) {
    event.preventDefault();
    console.log(this.props);
    const frontText = event.target.value;
    this.props.updateFrontText(frontText);
  }

  handleBackTextChange(event) {
    event.preventDefault();
    const backText = event.target.value;
    this.props.updateBackText(backText);
  }


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
          name="backText"
          id="backText"
          onChange={this.handleBackTextChange}
          defaultValue=""
        />
        <button onClick={this.handleDiscardClick}>DISCARD</button>
        <button onClick={this.handleRecordClick}>RECORD</button>
        <button onClick={this.handleSaveClick}>SAVE</button>
      </div>
    );
  }
}

CreateCard.propTypes = {
  updateFrontText: PropTypes.func.isRequired,
  updateBackText: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  discardCard: PropTypes.func.isRequired,
};

export default CreateCard;
