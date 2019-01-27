import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/site/Header';
import Navigator from './components/site/Navigator';
import Footer from './components/site/Footer';
// import Splash from './components/Splash';

class App extends Component {
  render() {
    // if(this.props.viewprofile === true){
    //   return (<Splash/>)
    // } else {
    return (
    <div className="main">
        <Header/>
        <section className="body">
          <Router>
            <Navigator />
          </Router>
        </section>
        <Footer/>
      </div>
    );
    // }
  }
}

export default App;