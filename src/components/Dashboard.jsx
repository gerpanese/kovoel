import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LearnImg from '../assets/images/learning.jpg';
import CreateImg from '../assets/images/createFlashcards.jpg';
import StatisticsImg from '../assets/images/statistic.jpg';
import RankingImg from '../assets/images/ranking.jpg';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  render() {
    return (
      <div className="dashboard">
        <div className="card">
          <img className="card-img-top learning" src={LearnImg} alt="learn" />
          <div className="card-body">
            <h4 className="card-title">Learn</h4>
            <p className="card-text">Learn new words and the pronunciation.</p>
            <a href="#" className="btn btn-primary" onClick={() => this.changePage('learning')}>Learn</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top createFlashcards" src={CreateImg} alt="create" />
          <div className="card-body">
            <h4 className="card-title">Manage</h4>
            <p className="card-text">Create new flashcards with your voice and administrate your flashcards.</p>
            <a href="#" className="btn btn-primary" onClick={() => this.changePage('administrationFlashCards')}>Manage</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top statistic" src={StatisticsImg} alt="statistics" />
          <div className="card-body">
            <h4 className="card-title">Statistics</h4>
            <p className="card-text">See how much you learned with statistics.</p>
            <a href="#" className="btn btn-primary" onClick={() => this.changePage('statistic')}>Statistics</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top ranking" src={RankingImg} alt="ranking" />
          <div className="card-body">
            <h4 className="card-title">Ranking</h4>
            <p className="card-text">See how much you learned compare to other users.</p>
            <a href="#" className="btn btn-primary" onClick={() => this.changePage('ranking')}>Ranking</a>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Dashboard;
