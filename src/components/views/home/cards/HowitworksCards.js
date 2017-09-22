import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

class HowitworksCards extends Component {
  render() {
    return (
      <div className="HowitworksCards">
      <p>Are you a contractor? Register here</p>
      <p> How it works </p>
      <ul>
        <li>badges showing how it works</li>
        <li>for customer</li>
          <ul>
          <li>Sign up and create appt request for free</li>
          <li>Platform will match with some contractors</li>
          <li>Appts are scheduled autom</li>
          </ul>
        <li>for contractor</li>
        <ul>
          <li>Contractor? Sign up and choose jobs provided</li>
          <li>pick time and area availability</li>
          <li> Only be charged at booking</li>
          </ul>
      </ul>


      <Card style={{width: '350px'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardText>dummyText</CardText>
        <CardActions>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>
      <Card style={{width: '350px'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardText>dummyText</CardText>
        <CardActions>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>

    
      </div>
    );
  }
}

export default HowitworksCards;
