import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.WebSpeechApi = WebSpeechApi;
    this.handleFrontTextChange = this.handleFrontTextChange.bind(this);
    this.handleBackTextChange = this.handleBackTextChange.bind(this);
    this.handleDiscardClick = this.handleDiscardClick.bind(this);
    this.handleRecordClick = this.handleRecordClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleFrontTextChange(event) {
    event.preventDefault();
    const frontText = event.target.value;
    this.props.updateFrontText(frontText);
  }

  handleBackTextChange(event) {
    event.preventDefault();
    const backText = event.target.value;
    this.props.updateBackText(backText);
  }

  handleDiscardClick(event) {
    event.preventDefault();
    this.props.discardCard();
  }

  handleRecordClick(event) {
    event.preventDefault();
    const speech = new this.WebSpeechApi();
    // hear a text
    speech.hear(
      'ja-JP',
      (frontText) => { this.props.updateFrontText(frontText); },
      errorMessage => console.log(errorMessage),
    );
  }

  handleSaveClick(event) {
    event.preventDefault();
    this.props.saveCard();
  }

  render() {
    return (
      <div className="CreateCard">
        <input
          type="text"
          name="frontText"
          id="frontText"
          onChange={this.handleFrontTextChange}
          value={this.props.frontText}
        />
        <input
          type="text"
          name="backText"
          id="backText"
          onChange={this.handleBackTextChange}
          value={this.props.backText}
        />
        <button
          id="discardButton"
          onClick={this.handleDiscardClick}
        >DISCARD
        </button>
        <button
          id="recordButton"
          onClick={this.handleRecordClick}
        >RECORD
        </button>
        <button
          id="saveButton"
          onClick={this.handleSaveClick}
        >SAVE
        </button>
      </div>
    );
  }
}

CreateCard.propTypes = {
  frontText: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
  updateFrontText: PropTypes.func.isRequired,
  updateBackText: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  discardCard: PropTypes.func.isRequired,
};

export default CreateCard;
