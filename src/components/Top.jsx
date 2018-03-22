import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Link,
  Switch 
} from 'react-router-dom';

import App from '../containers/App';

import '../assets/css/landing-page.css';

class Top extends Component {
  render() {
    const pageContent = this.getPageContent();

    return (
      <Router> 
        <div>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default Top;
