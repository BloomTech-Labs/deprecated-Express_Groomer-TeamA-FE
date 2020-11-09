import React from 'react';
import { Card } from 'antd';

function CardBack(props) {
  return (
    <Card>
      <h1>backside</h1>
      <button onClick={() => props.handleClick()}>click to flip</button>
    </Card>
  );
}

export default CardBack;
