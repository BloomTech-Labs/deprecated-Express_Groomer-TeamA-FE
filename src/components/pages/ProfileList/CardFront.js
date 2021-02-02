import React from 'react';
import { Link } from 'react-router-dom';
import './profileList.scss';
import { Card, Rate, Button } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
const { Meta } = Card;

function CardFront(props) {
  return (
    <Card
      className={'profiles-card'}
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
        style={{ marginTop: '5%', color: 'cyan' }}
        disabled
        defaultValue={5}
      />
      <br />
      {/* Button below should be made into a link that takes users to individual groomer pages */}
      <Tooltip title={`View ${props.item.name}'s Profile`}>
        <Link to={`groomer/${props.item.id}`}>
          <Button>View Profile</Button>
        </Link>
      </Tooltip>
      <button className="curl-bottom-left" onClick={() => props.handleClick()}>
        click to flip
      </button>
    </Card>
  );
}

export default CardFront;
