import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox';

class TabsTest extends React.Component {
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

  render () {
    return (
      <section>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label='Primary'></Tab>
          <Tab label='Secondary' onActive={this.handleActive}></Tab>
          <Tab label='Third' disabled></Tab>
          <Tab label='Fourth' hidden></Tab>
          <Tab label='Fifth'></Tab>
        </Tabs>
      </section>
    );
  }
}

export default TabsTest;
