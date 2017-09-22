import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';



class Signup extends React.Component {

  state = { firstName: '', lastName: '', email: '', phone: '', password: '', zipcode: '' };

  handleChange = (firstName, value) => {
    this.setState({...this.state, [firstName]: value});
  };
  handleLastNameChange = (lastName, value) => {
    this.setState({...this.state, [lastName]: value});
  };
  handleEmailChange = (email, value) => {
    this.setState({...this.state, [email]: value});
  };
  handlePhoneChange = (phone, value) => {
    this.setState({...this.state, [phone]: value});
  };
  handleZipcodeChange = (zipcode, value) => {
    this.setState({...this.state, [zipcode]: value});
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
              <h1>Signup</h1>
              <form>
                <section>
                  <Input type='text' label='First Name' name='first-name' value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')} />
                  <Input type='text' label='Last Name' name='last-name' value={this.state.lastName} onChange={this.handleLastNameChange.bind(this, 'lastName')} />
                  <Input type='email' label='Email' name='email' value={this.state.email} onChange={this.handleEmailChange.bind(this, 'email')} />
                  <Input type='tel' label='Phone' name='phone' value={this.state.phone} onChange={this.handlePhoneChange.bind(this, 'phone')} />
                  <Input type='text' label='ZIP Code' name='zipcode' value={this.state.zipcode} onChange={this.handleZipcodeChange.bind(this, 'zipcode')} />
                  <Input type='password' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange.bind(this, 'password')} />
                </section>
                <Button icon='clear' label='Clear' flat />
                <Button icon='check' label='Submit' flat />
              </form>
          </div>
        );
    }
}

export default Signup;
