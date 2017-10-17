import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const ProJumbo = (props) => {
  return (
    <div>
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <Button color="secondary" href="/#/prosignup">Pro Sign Up</Button>
      </Container>
    </Jumbotron>
    </div>
  );
};

export default ProJumbo;
