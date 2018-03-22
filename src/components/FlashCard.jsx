/* global document */
import React, { Component } from 'react';
import Fireworks from 'fireworks-react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';


import '../assets/css/FlashCard.css';

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.recordVoice = this.recordVoice.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.showNextFlashCard = this.showNextFlashCard.bind(this);
    this.gotoDashboard = this.gotoDashboard.bind(this);
    this.webSpeechApi = new WebSpeechApi();
  }

  componentWillMount() {
    this.props.getFlashCards()
      .then(() => {
        this.props.shuffleFlashCards();
      });
  }

  gotoDashboard() {
    this.props.changePage('dashboard');
  }

  handleKeyDown(event) {
    // @todo delete this
    this.a = 'a';

    if (event.key === 'ArrowRight') {
      this.showBackPart();
    } else if (event.key === 'ArrowLeft') {
      this.showDeckPart();
    }
  }

  showDeckPart() {
    document.getElementById('flashCard').className = 'card';
  }

  showBackPart() {
    document.getElementById('flashCard').className = 'card card_active';
  }

  showNextFlashCard(event) {
    event.preventDefault();
    this.showDeckPart();
    setTimeout(() => {
      this.props.flashCardSuccessfullyLearned(this.props.flashCard.id);
      if (document.getElementById('next-flashcard-button').length === undefined) {
        document.getElementById('next-flashcard-button').classList.add('d-none');
        document.getElementById('microphone').classList.remove('d-none');
      }
    }, 300);
  }

  setMicrophoneActive() {
    const node = document.getElementById('microphone-learning');
    node.title = 'microphone is recording your voice';
    node.classList.add('microphone-active');
  }

  setMicrophoneInActive() {
    const node = document.getElementById('microphone-learning');
    node.title = 'please click for record your voice';
    node.classList.remove('microphone-active');
  }

  recordVoice() {
    this.setMicrophoneActive();
    this.webSpeechApi.hear(
      this.props.languageCode,
      (text) => {
        this.setMicrophoneInActive();
        if (text === this.props.flashCard.preview) {
          this.webSpeechApi.speech(text, this.props.languageCode);
          this.showBackPart();

          document.getElementById('next-flashcard-button').classList.remove('d-none');
          document.getElementById('microphone-learning').classList.add('d-none');
        } else {
          this.webSpeechApi.speech(
            this.props.errorMessage,
            this.props.languageCode,
          );
          this.showDeckPart();
          this.props.flashCardFaultyLearned(this.props.flashCard.id);
        }
      },
      errorMessage => {
        this.setMicrophoneInActive();
        console.log(errorMessage)
      },
      () => {
        this.setMicrophoneInActive();
      },
    );
  }

  render() {
    if (!this.props.hasStillFlashCardsToLearn) {
      const size = 500;
      return (
        <div className="final">
          <Fireworks className="fireworks" width={size} height={size} />
          <br />
          <button
            className="btn-primary btn goto-dashboard"
            onClick={() => this.gotoDashboard()}
          >
            go to dashboard
          </button>
        </div>);
    }

    if (this.props.flashCard === null) {
      return (<div>loading ....</div>);
    }

    document.body.onkeydown = this.handleKeyDown;

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

        <div
          id="next-flashcard-button"
          className="btn btn-success d-none"
          onClick={event => this.showNextFlashCard(event)}
        >
          next flashcard
        </div>
        <div
          className="microphone"
          id="microphone-learning"
          onClick={event => this.recordVoice(event)}
        />
      </div>
    );
  }
}

FlashCard.propTypes = {
  languageCode: PropTypes.string.isRequired,
  flashCard: PropTypes.object,
  getFlashCards: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  flashCardSuccessfullyLearned: PropTypes.func.isRequired,
  hasStillFlashCardsToLearn: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
  flashCardFaultyLearned: PropTypes.func.isRequired,
  shuffleFlashCards: PropTypes.func.isRequired,
};

FlashCard.defaultProps = {
  flashCard: null,
  hasStillFlashCardsToLearn: true,
};

export default FlashCard;
