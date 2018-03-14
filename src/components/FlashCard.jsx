import React, { Component } from 'react';
import Fireworks from 'fireworks-react';
import propTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/FlashCard.css';

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.recordVoice = this.recordVoice.bind(this);
    this.gotoDashboard = this.gotoDashboard.bind(this);
    this.webSpeechApi = new WebSpeechApi();
  }

  componentWillMount() {
    this.props.shuffleFlashCards();
  }

  gotoDashboard() {
    this.props.changePage('dashboard');
  }

  recordVoice() {
    this.webSpeechApi.hear(
      this.props.languageCode,
      (text) => {
        if (text === this.props.flashCard.preview) {
          this.webSpeechApi.speech(text, this.props.languageCode);
          document.getElementById('flashCard').className = 'card card_active';

          setTimeout(() => {
            document.getElementById('flashCard').className = 'card';
            setTimeout(() => {
              this.props.flashCardSuccessfullyLearned(this.props.flashCard.id);
            }, 300);
          }, 2000);
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
    if (!this.props.hasStillFlashCardsToLearn) {
      const size = 500;
      return (
        <div>
          <Fireworks className="fireworks" width={size} height={size} />
          <button onClick={event => this.gotoDashboard()}>go to dashboard</button>
        </div>);
    }

    if (this.props.flashCard === null) {
      return (<div>loading ....</div>);
    }

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

        <div className="microphone" onClick={event => this.recordVoice(event)} />
      </div>
    );
  }
}

export default FlashCard;
