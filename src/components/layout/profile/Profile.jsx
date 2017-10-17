import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>Anchors </h3>
        <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
        <ListGroup>
          <ListGroupItem active tag="a" href="" action>link1</ListGroupItem>
          <ListGroupItem tag="a" href="" action>link2</ListGroupItem>
        </ListGroup>
        <p />
        <h3>Buttons </h3>
        <ListGroup>
          <ListGroupItem active tag="button" action>name goes here</ListGroupItem>
          <ListGroupItem tag="button" action>email address goes here</ListGroupItem>
          <ListGroupItem tag="button" action>physical address and zip</ListGroupItem>
          <ListGroupItem active tag="button" action>phone</ListGroupItem>
          <ListGroupItem disabled tag="button" action>prefered contact method</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
