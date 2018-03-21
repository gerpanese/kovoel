import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';

import '../assets/css/administration.css';

class AdministrationFlashCards extends Component {
  constructor(props) {
    super(props);
    this.isFirstPage = true;
    this.WebSpeechApi = WebSpeechApi;
    this.handleDeleteCardChange = this.handleDeleteCardChange.bind(this);
    this.handleUpdateCardChange = this.handleUpdateCardChange.bind(this);
  }

  componentDidMount() {
    this.props.getFlashCards();
  }

  changePage(page) {
    this.props.changePage(page);
  }

  handleUpdateCardChange(event, id) {
    event.preventDefault();
    this.props.changePage('createCard', id);
  }

  handleDeleteCardChange(event, id) {
    event.preventDefault();
    this.props.deleteCard(id);
  }

  render() {
    if (this.props.flashCards.length === 0) {
      return (
        <div className="container administration">
          <h2>manage your flashcards</h2>
          <p>
            Create your first flashcard!<br />
            <button
              onClick={() => this.changePage('createCard')}
              type="button"
              className="btn btn-primary"
            >
              create new flashcard
            </button>
          </p>
        </div>
      );
    }
    return (
      <div className="container administration">
        <h2>manage your flashcards</h2>
        <p>
          <button
            onClick={() => this.changePage('createCard')}
            type="button"
            className="btn btn-primary"
          >
            create new flashcard
          </button>
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>front-text</th>
              <th>back-text</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              this.props.flashCards.map((card, idx) => (
                <tr key={idx}>
                  <td>{card.id}</td>
                  <td>{card.preview}</td>
                  <td>{card.translation}</td>
                  <td>
                    <div className="btn-group btn-group-justified">
                      <button
                          type="button"
                          className="btn btn-default"
                          onClick={event => this.handleUpdateCardChange(event, card.id)}
                        >
                        update
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={event => this.handleDeleteCardChange(event, card.id)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}


AdministrationFlashCards.propTypes = {
  getFlashCards: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  flashCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    romanji: PropTypes.string.isRequired,
  })).isRequired,
};

export default AdministrationFlashCards;
