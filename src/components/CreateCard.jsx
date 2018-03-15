import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/createCard.css';

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
      <div class="panel panel-default">
      <div className="panel-body create-card">
        <input
          type="text"
          name="frontText"
          id="frontText"
          placeholder="Please press the record button"
          onChange={this.handleFrontTextChange}
          value={this.props.frontText}
        />
        <button
          id="discardButton"
          className="btn btn-danger"
          onClick={this.handleDiscardClick}
        >DISCARD
        </button>
        <button
          id="recordButton"
          className="btn btn-success"
          onClick={this.handleRecordClick}
        >RECORD
        </button>

        <br />

        <input
          type="text"
          name="backText"
          id="backText"
          placeholder="Please add the back-text"
          onChange={this.handleBackTextChange}
          value={this.props.backText}
        />


        <button
          id="cancelButton"
          className="btn btn-info"
          onClick={this.handleSaveClick}
        >cancel
        </button>
        <button
          id="saveButton"
          className="btn btn-success"
          onClick={this.handleSaveClick}
        >SAVE
        </button>
      </div>
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
