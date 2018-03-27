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

  setMicrophoneActive(no) {
    this.setMicrophoneInActive();
    const node = document.getElementById(`microphone-learning-${no}`);
    node.title = 'microphone is recording your voice';
    node.classList.add('microphone-active');
  }

  setMicrophoneInActive() {
    for (let no = 1; no <= 2; no += 1) {
      const node = document.getElementById(`microphone-learning-${no}`);
      node.title = 'please click for record your voice';
      node.classList.remove('microphone-active');
    }
  }

  handleRecordClick(event) {
    event.preventDefault();
    const speech = new this.WebSpeechApi();
    let hearingLanguageCode = '';
    let callbackFunction;
    switch (event.target.dataset.linkedTo) {
      case 'frontText':
        this.setMicrophoneActive(1);
        hearingLanguageCode = 'ja-JP';
        callbackFunction = (text) => {
          this.setMicrophoneInActive();
          this.props.updateFrontText(text);
          
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
        this.setMicrophoneActive(2);
        hearingLanguageCode = 'en-US';
        callbackFunction = (text) => {
          this.setMicrophoneInActive();
          this.props.updateBackText(text);
          const apiKey = process.env.GoogleCloudTranslationApiKey;
          if (apiKey !== undefined) {
            const googleTranslationInstance = googleTranslate(apiKey);
            googleTranslationInstance.translate(text, 'ja', (error, translation) => {
              this.props.updateFrontText(translation.translatedText);
            });
          }
        };
        break;
      default:
        throw new Error(`${event.target.dataset.linkedTo} is undefined`);
    }
    // hear a text
    speech.hear(
      hearingLanguageCode,
      frontText => callbackFunction(frontText),
      (errorMessage) => {
        this.setMicrophoneInActive();
        console.log(errorMessage);
      },
      () => {
        this.setMicrophoneInActive();
      },
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
              <div className="content">
                <strong>japanese text</strong>
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
                  id="microphone-learning-1"
                  data-id="1"
                  data-linked-to="frontText"
                  onClick={this.handleRecordClick}
                />
              </div>
            </div>
            <div className="flashcard">
              <div className="content">
                <strong>english text</strong>
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
                  id="microphone-learning-2"
                  data-linked-to="backText"
                  data-id="2"
                  onClick={this.handleRecordClick}
                />
              </div>
            </div>
          </div>

          <div className="btn-group">
            <button
              id="cancelButton"
              className="btn btn-info"
              title="please click for record your voice"
              onClick={this.handleCancellationClick}
            >cancel
            </button>
            <button
              id="saveButton"
              className="btn btn-success"
              title="please click for record your voice"
              onClick={this.handleSaveClick}
            >save
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
