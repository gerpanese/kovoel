import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/createCard.css';
import '../assets/FlashCard.css';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.isFirstPage = true;
    this.WebSpeechApi = WebSpeechApi;
    this.handleFrontTextChange = this.handleFrontTextChange.bind(this);
    this.handleBackTextChange = this.handleBackTextChange.bind(this);
    this.handleDiscardClick = this.handleDiscardClick.bind(this);
    this.handleRecordClick = this.handleRecordClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.turnAroundFlashCard = this.turnAroundFlashCard.bind(this);
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

  turnAroundFlashCard(event) {
    const nodeFrontText = document.getElementById('frontText');
    const nodeBackText = document.getElementById('backText');

    if (this.isFirstPage) {
      nodeFrontText.className = 'd-lg-none';
      nodeBackText.className = '';
    } else {
      nodeFrontText.className = '';
      nodeBackText.className = 'd-lg-none';
    }
    this.isFirstPage = !this.isFirstPage;
  }

  render() {
    /*
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
        */
    return (
      <div className="panel panel-default">
      <div className="panel-body create-card">
        <div
          className="turn-around"
          onClick={event => this.turnAroundFlashCard(event)}
          title="turn around the flashcard"
        />

        <input
          type="text"
          name="frontText"
          id="frontText"
          placeholder="Please press the record button"
          onChange={this.handleFrontTextChange}
          value={this.props.frontText}
        />

        <input
          type="text"
          name="backText"
          id="backText"
          className="d-lg-none"
          placeholder="Please press the record button"
          onChange={this.handleBackTextChange}
          value={this.props.backText}
        />

        <br />

        <div
          title="record new flashcard"
          className="microphone"
          onClick={this.handleRecordClick}
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
