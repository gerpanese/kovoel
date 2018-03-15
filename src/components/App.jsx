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
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';

import '../assets/landing-page.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.gotoHomepage = this.gotoHomepage.bind(this);
    this.onScreenShow = this.onScreenShow.bind(this);
  }

  gotoHomepage() {
    this.props.changePage('landingpage');
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
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#" onClick={event=>this.gotoHomepage()}>kovoel</a>
            <a className="btn btn-primary" href="#" onClick={() => this.onScreenShow()}>Sign In</a>
          </div>
        </nav>

        {pageContent}

        <Footer />

        <Login />

      </div>
    );
  }

  onScreenShow() {
    document.getElementById('login').style.display = 'block';
  }
}

export default App;
