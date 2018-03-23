import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import FlashCard from '../containers/FlashCard';
import Statistic from '../containers/Statistic';
import Ranking from '../containers/Ranking';
import CreateCard from '../containers/CreateCard';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import AboutUs from '../containers/AboutUs';
import LandingPageTeaser from '../containers/LandingPageTeaser';
import LandingPageContent from '../containers/LandingPageContent';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import TopNavigation from '../containers/TopNavigation';
import AdministrationFlashCards from '../containers/AdministrationFlashCards';

import '../assets/css/landing-page.css';

class App extends Component {
  componentWillMount() {
    const redirectedUrl = window.location.href;

    const accessToken = Cookies.get('cookie');
    const googleApi = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
    if (redirectedUrl.includes('?code=')) {
      fetch(`${googleApi}?access_token=${accessToken}`)
        .then(response => response.json())
        .then(json => {
          return json.email
        })
        .then(email => {
          fetch('auth/google/isTokenValid', {
            method: 'POST',
            body: JSON.stringify({
              email
            }),
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            })
          })
          .then(response => {
            return response.json();
          })
          .then(result => {
            if (result) {
              this.props.changePage('dashboard');
              this.props.setIsLoggedIn();
              // Cookies.remove('cookie');
            }
          })
        })      
    };
  }

  getPageContent() {
    switch (this.props.currentPage) {
      case 'learning':
        return (
          <div className="App">
            <FlashCard />
          </div>
        );

      case 'administrationFlashCards':
        return (
          <div className="App">
            <AdministrationFlashCards />
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
            <Dashboard />
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
          </div>
        );
    }
  }

  render() {
    const pageContent = this.getPageContent();

    return (
      <div>
          <TopNavigation />

          {pageContent}

          <Footer />

          <Login />
      </div>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default App;
