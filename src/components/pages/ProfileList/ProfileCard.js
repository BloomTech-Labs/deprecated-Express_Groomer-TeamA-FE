import React from 'react';
import './profileList.scss';
import { Card, Rate } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';
const { Meta } = Card;

function ProfileCard(props) {
  return (
    <>
      <Card
        className="profile-card front"
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
          style={{ 'margin-top': '5%', color: 'black' }}
          disabled
          defaultValue={5}
        />
      </Card>
    </>
  );
}

export default ProfileCard;
