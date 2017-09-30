import React from 'react';
import { Jumbo } from '../../layout/jumbotron';
import { CardGroup } from '../../layout/cardgroup';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>TEST - HOME</h1>
        <Jumbo />
        <CardGroup />
      </div>
    );
  }
}
