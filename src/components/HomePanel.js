import React, { Component } from 'react';
import NavigationTabs from './NavigationTabs.js';
import Footer from "./Footer.js"

class HomePanel extends React.Component {
    render() {
        return (
              <div>
                  <NavigationTabs />
                  <h2>not Main Content yet</h2>
                  <Footer />

              </div>
        );
    }
}

export default HomePanel;
