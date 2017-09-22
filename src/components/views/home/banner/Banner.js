import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
      <Card style={{width: '350px'},{ display: 'inline'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Lead Machine"
          subtitle="LM matches contractors to jobs"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardText>dummyText</CardText>
        <CardActions>
          <Button label="Customers go here" />
          <Button label="Contractors go here" />
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default Banner;
