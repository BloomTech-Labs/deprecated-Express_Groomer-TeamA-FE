import React from 'react';
import './profileList.scss';
import { Card, Rate, Button } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';
const { Meta } = Card;

function CardFront(props) {
  return (
    <Card
      className={'profile-card'}
      key={props.item.id}
      cover={
        <img
          className="card-image"
          src={props.item.avatarUrl}
          alt={props.item.name}
        />
      }
    >
      <Meta
        className="card-data"
        title={props.item.name}
        description={'user or groomer'}
      ></Meta>
      <br />
      Rating:
      <br />
      <Rate
        character={<ScissorOutlined />}
        style={{ 'margin-top': '5%', color: 'cyan' }}
        disabled
        defaultValue={5}
      />
      <br />
      <Button>View Profile</Button>
      <button onClick={() => props.handleClick()}>click to flip</button>
    </Card>
  );
}

export default CardFront;
