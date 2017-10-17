import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardBlock>
          <CardTitle>Footer goes here</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
          <Button>Button</Button>
          <Button href="/#/404">404 test</Button>
          <br/><br/>
          <Button color="danger" href="/#/todos">ToDo's</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Footer;
