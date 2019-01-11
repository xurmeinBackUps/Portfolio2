import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="main">
        {/* <section className="header"> */}
          <Header/>
        {/* </section> */}
        <section className="body">
          <Router>
            <Navigator />
          </Router>
        </section>
        {/* <section className="footer"> */}
          <Footer/>
        {/* </section> */}
      </div>
    );
  }
}

export default App;