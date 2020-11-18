import React from 'react';
import { Card } from 'antd';

function CardBack(props) {
  // Can be used to add more data/functionality for a profile card
  // maybe add  way to rate a groomer or show their business info
  return (
    <Card>
      <h1>backside</h1>
      <button onClick={() => props.handleClick()}>click to flip</button>
    </Card>
  );
}

export default CardBack;
