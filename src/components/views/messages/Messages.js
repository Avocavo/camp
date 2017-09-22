import React, { Component } from 'react';
import { List } from './list';

class Messages extends React.Component {
    render() {
        return (
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
              <h1>Messages</h1>
              <List />
          </div>
        );
    }
}

export default Messages;
