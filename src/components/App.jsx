import React, { Component } from 'react';
import propTypes from 'prop-types';
import FlashCard from '../containers/FlashCard';
import Statistic from '../containers/Statistic';
import Ranking from '../containers/Ranking';
import CreateCard from '../containers/CreateCard';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import AboutUs from '../containers/AboutUs';
import LandingPageTeaser from '../containers/LandingPageTeaser';
import LandingPageContent from '../containers/LandingPageContent';

import '../assets/landing-page.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  getPageContent() {
    switch (this.props.currentPage) {
      case 'learning':
        return (
          <div className="App">
            <FlashCard />
          </div>
        );

      case 'createCard':
        return (
          <div className="App">
              <CreateCard />
          </div>
        );

      case 'statistic':
        return (
          <div className="App">
            <Statistic />
          </div>
        );

      case 'ranking':
        return (
          <div className="App">
            <Ranking />
          </div>
        );

      case 'dashboard':
        return (
          <div className="App">
            <ul>
              <li onClick={event => this.changePage('learning')}>Learning</li>
              <li onClick={event => this.changePage('createCard')}>Administration</li>
              <li onClick={event => this.changePage('statistic')}>Statistic</li>
              <li onClick={event => this.changePage('ranking')}>Ranking</li>
            </ul>
          </div>
        );

      case 'landingPage':
      default:
        return (
          <div>
            <Header />
            <LandingPageTeaser />
            <LandingPageContent />
            <AboutUs />
            <Footer />
          </div>
        );
    }
  }

  render() {
    const pageContent = this.getPageContent();
    return (
      <div>
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">kovoel</a>
            <a className="btn btn-primary" href="#">Sign In</a>
          </div>
        </nav>

        {pageContent}

      </div>
    );
  }
}

export default App;
