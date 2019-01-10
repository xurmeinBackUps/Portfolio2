import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import Navigator from './components/Navigator';
import SiteFooter from './components/SiteFooter';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="main">
        <section className="header">
          <SiteHeader/>
          This is my portfolio, bro!
        </section>
        <section className="body">
          <Router>
            <Navigator />
          </Router>
        </section>
        <section className="footer">
          <SiteFooter/>
        </section>
      </div>
    );
  }
}

export default App;