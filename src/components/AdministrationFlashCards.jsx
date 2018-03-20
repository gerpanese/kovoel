import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebSpeechApi from '../utils/WebSpeechApi';


class AdministrationFlashCards extends Component {
  constructor(props) {
    super(props);
    this.isFirstPage = true;
    this.WebSpeechApi = WebSpeechApi;
    this.handleDeleteCardChange = this.handleDeleteCardChange.bind(this);
  }

  componentDidMount() {
    this.props.getFlashCards();
  }

  changePage(page) {
    this.props.changePage(page);
  }

  handleDeleteCardChange(event, id) {
    event.preventDefault();
    this.props.deleteCard(id);
  }

  render() {
    return (
      <div className="container">
        <h2>FlashCard - Administration</h2>
        <p>
          click
          <a href="#" onClick={() => this.changePage('createCard')}>here</a>
          for creating a new flash-card
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
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={event => this.handleDeleteCardChange(event, card.id)}
                    >
                      delete
                    </button>
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
