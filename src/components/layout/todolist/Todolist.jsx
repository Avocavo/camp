import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <Container>
          <Row>
            <Col xs="auto">
              <ListGroup>
                <ListGroupItem color="success">optional</ListGroupItem>
                <ListGroupItem color="info">harmless</ListGroupItem>
                <ListGroupItem color="warning">potential errors after fixing</ListGroupItem>
                <ListGroupItem color="danger">app broken</ListGroupItem>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroupItem color="warning">
                  <ListGroupItemHeading>NavBar not fluid</ListGroupItemHeading>
                  <ListGroupItemText>Navbar stuck on minimized state, should switch depending on window width between menu and tabs. Potential fix with Reactstrap update (new prop: expand)</ListGroupItemText>
                </ListGroupItem><br/>
                <ListGroupItem color="info">
                  <ListGroupItemHeading>Get rid of # sign on URL and hrefs</ListGroupItemHeading>
                  <ListGroupItemText>Empty links automatically path to Home since '/' and '/#' are the same</ListGroupItemText>
                </ListGroupItem><br/>
                <ListGroupItem color="info">
                  <ListGroupItemHeading>Replace Placeholder text</ListGroupItemHeading>
                  <ListGroupItemText>Compose deliverable strings, remove test text</ListGroupItemText>
                </ListGroupItem><br/>
                <ListGroupItem color="warning">
                  <ListGroupItemHeading>Replace Home Jumbo with Carousel</ListGroupItemHeading>
                  <ListGroupItemText>Update Reactstrap to use new component Carousel</ListGroupItemText>
                </ListGroupItem><br/>
                <ListGroupItem color="success">
                  <ListGroupItemHeading>Move FAQ to footer</ListGroupItemHeading>
                  <ListGroupItemText>Add FAQ to footer, remove from navbar</ListGroupItemText>
                </ListGroupItem><br/>

              </ListGroup>
            </Col>
          </Row>
        </Container>
        <br/><br/>
        <Container>
          <Row>
            <Col xs="8">
              <ListGroup>
              <ListGroupItem color="primary">
                <ListGroupItemHeading>Completed</ListGroupItemHeading><br/>
                <ListGroupItemText>React Router</ListGroupItemText>
                <ListGroupItemText>Menu hides after link is selected</ListGroupItemText>
                <ListGroupItemText>-</ListGroupItemText>
              </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="4">
              <ListGroup>
                <ListGroupItem color="muted">
                  <ListGroupItemHeading>Discarded</ListGroupItemHeading><br/>
                  <ListGroupItemText>-</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <br/><br/>
      </div>
    );
  }
}
