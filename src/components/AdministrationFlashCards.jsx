import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
    this.props.getFlashCards(this.props.userId);
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
    confirmAlert({
      title: 'Confirm to delete this flashcard?',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props.deleteCard(id);
          },
        },
        {
          label: 'No',
        },
      ],
    });
  }

  render() {
    if (this.props.flashCards.length === 0) {
      return (
        <div className="container administration">
          <h2>Manage your flashcards</h2>
          <button
            onClick={() => this.changePage('createCard')}
            type="button"
            className="btn btn-primary"
          >
            Create new flashcard
          </button>
        </div>
      );
    }
    return (
      <div className="container administration">
        <h2>Manage your flashcards</h2>
        <p>
          <button
            onClick={() => this.changePage('createCard')}
            type="button"
            className="btn btn-primary"
          >
            Create new flashcard
          </button>
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Japanese</th>
              <th>English</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              this.props.flashCards.map((card, idx) => (
                <tr key={idx}>
                  <td>{card.preview}</td>
                  <td>{card.translation}</td>
                  <td>
                    <div className="btn-group btn-group-justified">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={event => this.handleUpdateCardChange(event, card.id)}
                      >
                        Update
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={event => this.handleDeleteCardChange(event, card.id)}
                      >
                        Delete
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
