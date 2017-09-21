import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox';
import ToDo from './ToDo.js';
import SecondPage from './SecondPage.js'
import HomePanel from './HomePanel.js'

export default class NavigationTabs extends React.Component {

  state = {
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };

    render() {
        return (
              <div>
              <section>
                <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
                  <Tab label='ToDos'>
                    <ToDo />
                    <HomePanel />
                  </Tab>
                  <Tab label='SecondPage'>
                      <SecondPage />
                  </Tab>


                  <Tab label='Third'><small>Third Content</small></Tab>
                  <Tab label='Disabled' disabled><small>Disabled Content</small></Tab>
                </Tabs>
              </section>
              </div>
        );
    }
}
