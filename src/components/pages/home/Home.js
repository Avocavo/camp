import React from 'react';
import { Jumbo } from '../../layout/jumbotron';
import { CardGroup } from '../../layout/cardgroup';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbo />
        <CardGroup />
      </div>
    );
  }
}
