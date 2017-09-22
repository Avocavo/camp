import React, { Component } from 'react';
import { HowitworksCards as Cards } from './cards';
import { Banner }  from './banner';

class Home extends React.Component {
    render() {
        return (
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
              <Banner />
              <Cards />
          </div>
        );
    }
}

export default Home;
