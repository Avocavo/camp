import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { Home } from './pages/home';
import { Signup } from './pages/signup';
import { Pro } from './pages/pro';
import { FAQ } from './pages/faq';
import { ProSignup } from './pages/prosignup';
import { MyProfile } from './pages/myprofile';
import { Error404 } from './pages/error404';
import { ToDos } from './pages/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <HashRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/pro' exact component={Pro} />
            <Route path='/faq' exact component={FAQ} />
            <Route path='/prosignup' exact component={ProSignup} />
            <Route path='/myprofile' exact component={MyProfile} />
            <Route path='/404' exact component={Error404} />
            <Route path='/todos' exact component={ToDos} />
          </Switch>
        </HashRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
