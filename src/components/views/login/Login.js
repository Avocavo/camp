import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';



class Login extends React.Component {

  state = { email: '', password: '' };

  handleEmailChange = (email, value) => {
    this.setState({...this.state, [email]: value});
  };
  handlePasswordChange = (password, value) => {
    this.setState({...this.state, [password]: value});
  };

    render() {
      const style = {
        padding: '1.8rem'
      };

        return (
          <div style={style}>
              <h1>Login</h1>
              <form>
                <section>
                  <Input type='email' label='Email' name='email' value={this.state.email} onChange={this.handleEmailChange.bind(this, 'email')} />
                  <Input type='password' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange.bind(this, 'password')} />
                </section>
                <Button icon='clear' label='Clear' flat />
                <Button icon='check' label='Submit' flat />
              </form>
          </div>
        );
    }
}

export default Login;
