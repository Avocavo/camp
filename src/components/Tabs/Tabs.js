import React, { Component } from 'react';
import {  Tab as TabRTB,
          Tabs as TabsRTB} from 'react-toolbox';

class Tabs extends React.Component {
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
        <TabsRTB index={this.state.index} onChange={this.handleTabChange}>
          <TabRTB label='Primary'></TabRTB>
          <TabRTB label='Secondary' onActive={this.handleActive}></TabRTB>
          <TabRTB label='Third' disabled></TabRTB>
          <TabRTB label='Fourth' hidden></TabRTB>
          <TabRTB label='Fifth'></TabRTB>
        </TabsRTB>
      </section>
    );
  }
}

export default Tabs;
