import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    let token = '';
    for (let i = 0; i < redirectedUrl.length; i += 1){
      if (redirectedUrl[i] === '=') {
        token = redirectedUrl.slice(i+1,);
      }
    }

    if (redirectedUrl.includes('?code=')) {
      fetch('auth/google/isTokenValid', {
        method: 'POST',
        body: JSON.stringify({
          token
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        })
      })
      .then(response => response.json())
      .then(json => console.log(json));
      
      this.props.changePage('dashboard');
      this.props.setIsLoggedIn();
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
