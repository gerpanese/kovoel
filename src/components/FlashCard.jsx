import React, { Component } from 'react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/FlashCard.css';

class FlashCard extends Component {
  constructor(args) {
    super(args);
    this.recordVoice = this.recordVoice.bind(this);
    this.webSpeechApi = new WebSpeechApi();
  }

  recordVoice() {
    this.webSpeechApi.hear(
      this.props.languageCode,
      (text) => {
        if (text === this.props.flashCard.preview) {
          this.webSpeechApi.speech(text, this.props.languageCode);
          document.getElementById('flashCard').className = 'card card_active';
          this.props.flashCardSuccessfullyLearned(this.props.flashCard.id);

          setTimeout(() => {
            document.getElementById('flashCard').className = 'card';
          }, 1000);
        } else {
          this.webSpeechApi.speech(this.props.errorMessage, this.props.languageCode);
          document.getElementById('flashCard').className = 'card';
          this.props.flashCardFaultyLearned(this.props.flashCard.id);
        }
      },
      errorMessage => console.log(errorMessage),
    );
  }

  render() {
    return (
      <div>

      <div className="card-container">
        <div id="flashCard" className="card">
            <div className="front">
                <div className="eng">{this.props.flashCard.preview}</div>
            </div>
            <div className="front back">
                <div className="han">{this.props.flashCard.translation}</div>
                <div className="pin">{this.props.flashCard.romanji}</div>
            </div>
        </div>
      </div>

      <div className="microphone" onClick={event => this.recordVoice(event)}></div>
      </div>
    );
  }
}

export default FlashCard;
