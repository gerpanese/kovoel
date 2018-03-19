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
    this.gotoDashboard = this.gotoDashboard.bind(this);
    this.webSpeechApi = new WebSpeechApi();
  }

  componentWillMount() {
    this.props.shuffleFlashCards();
  }

  gotoDashboard() {
    this.props.changePage('dashboard');
  }

  handleKeyDown(event) {
    // @todo delete this
    this.a = 'a';

    console.log(event.key);

    // const { cursor, result } = this.state;
    // arrow up/down button should select next/previous list element
    if (event.key === 38 && cursor > 0) {
      /* this.setState( prevState => ({
        cursor: prevState.cursor - 1,
      })); */
    } else if (event.key === 40 && cursor < result.length - 1) {
      /* this.setState( prevState => ({
        cursor: prevState.cursor + 1,
      })); */
    }
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
          this.webSpeechApi.speech(
            this.props.errorMessage,
            this.props.languageCode,
          );
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
          className="microphone"
          onClick={event => this.recordVoice(event)}
        />
      </div>
    );
  }
}

FlashCard.propTypes = {
  languageCode: PropTypes.string.isRequired,
  flashCard: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    romanji: PropTypes.string.isRequired,
  })),
  changePage: PropTypes.func.isRequired,
  flashCardSuccessfullyLearned: PropTypes.func.isRequired,
  hasStillFlashCardsToLearn: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
  flashCardFaultyLearned: PropTypes.func.isRequired,
  shuffleFlashCards: PropTypes.func.isRequired,
};

FlashCard.defaultProps = {
  flashCard: {
    id: 0,
    preview: '',
    translation: '',
    romanji: '',
  },
  hasStillFlashCardsToLearn: true,
};

export default FlashCard;
