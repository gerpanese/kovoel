/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import googleTranslate from 'google-translate';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/css/createCard.css';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.isFirstPage = true;
    this.WebSpeechApi = WebSpeechApi;
    this.handleFrontTextChange = this.handleFrontTextChange.bind(this);
    this.handleBackTextChange = this.handleBackTextChange.bind(this);
    this.handleRecordClick = this.handleRecordClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancellationClick = this.handleCancellationClick.bind(this);
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

  handleRecordClick(event) {
    event.preventDefault();
    const speech = new this.WebSpeechApi();
    let hearingLanguageCode = '';
    let callbackFunction;
console.log(event.target.dataset);
    switch (event.target.dataset.linkedTo) {
      case 'frontText':
        hearingLanguageCode = 'ja-JP';
        callbackFunction = (text) => {
          console.log(111, text);
          this.props.updateFrontText(text);
          console.log(222);
          const apiKey = process.env.GoogleCloudTranslationApiKey;
          if (apiKey !== undefined) {
            const googleTranslationInstance = googleTranslate(apiKey);
            googleTranslationInstance.translate(text, 'en', (error, translation) => {
              this.props.updateBackText(translation.translatedText);
            });
          }
        };
        break;
      case 'backText':
        hearingLanguageCode = 'en-US';
        callbackFunction = this.props.updateBackText;
        break;
      default:
        throw new Error(`${event.target.dataset.linkedTo} is undefined`);
    }
    // hear a text
    speech.hear(
      hearingLanguageCode,
      frontText => callbackFunction(frontText),
      errorMessage => console.log(errorMessage),
    );
  }

  handleSaveClick(event) {
    event.preventDefault();

    if (this.props.cardId !== 0) {
      this.props.updateCard();
    } else {
      const newFlashCard = {
        user_id: 1,
        preview: this.props.frontText,
        translation: this.props.backText,
        romanji: this.props.backText,
        note: '',
      };
      this.props.saveCard(newFlashCard);
    }

    const nodeSaveState = document.getElementById('save-state');
    nodeSaveState.classList.remove('d-none');

    setTimeout(() => {
      nodeSaveState.classList.add('d-none');
    }, 2000);
  }

  handleCancellationClick(event) {
    event.preventDefault();
    document.getElementById('frontText').value = '';
    document.getElementById('backText').value = '';
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body create-card">

          <div id="save-state" className="alert alert-success d-none" role="alert">
            <strong>Well done!</strong> Your change is successfully saved.
          </div>

          <div className="flashcards">
            <div className="flashcard">
              <strong>front text</strong>
              <textarea
                name="frontText"
                id="frontText"
                className="text"
                placeholder="Please press the record button"
                onChange={this.handleFrontTextChange}
                value={this.props.frontText}
              />
              <div
                title="record new flashcard"
                className="microphone"
                data-linked-to="frontText"
                onClick={this.handleRecordClick}
              />
            </div>
            <div className="flashcard">
              <strong>back text</strong>
              <textarea
                name="backText"
                id="backText"
                className="text"
                placeholder="Please press the record button"
                onChange={this.handleBackTextChange}
                value={this.props.backText}
              />
              <div
                title="record new flashcard"
                className="microphone"
                data-linked-to="backText"
                onClick={this.handleRecordClick}
              />
            </div>
          </div>

          <div className="button-list">
            <button
              id="cancelButton"
              className="btn btn-info"
              onClick={this.handleCancellationClick}
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
};

export default CreateCard;
