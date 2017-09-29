import React, { Component } from 'react';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { Home } from './pages/home';
import { Signup } from './pages/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/><br/>
        <Home />
        <br/><br/>
        <Signup />
        <br/><br/>
        <Footer />
      </div>
    );
  }
}

export default App;
