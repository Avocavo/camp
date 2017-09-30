import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { Home } from './pages/home';
import { Signup } from './pages/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <HashRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={Signup} />
          </Switch>
        </HashRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
