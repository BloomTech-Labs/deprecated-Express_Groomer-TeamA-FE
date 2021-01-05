import React from 'react';
import { Button, Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import NavBar from '../../Navigation/NavBar';
import {
  Heading,
  ImageMessage,
  Image,
  MessageButton,
  Message,
} from './TopStyles';
import {
  ReviewTitle,
  ReviewSection,
  ReviewCard,
  CardText,
  BottomButton,
} from './BottomStyles';
import { PageMessage, ReviewOne, ReviewTwo, ReviewThree } from './Text';

function RenderLandingPageForGroomers(props) {
  return (
    <Layout>
      <NavBar />
      <div>
        <Heading>Join our network of professional groomers</Heading>
      </div>
      {
        // Dog image and "Join our network" paragraph
      }
      <ImageMessage>
        <div>
          <Image
            alt="black golden retriever puppy looking up at camera while sitting on wood flooring"
            src="https://picsum.photos/id/237/700/500"
          />
        </div>
        <MessageButton>
          <Message>{PageMessage}</Message>
          <Button type="primary" size={'large'}>
            Apply
          </Button>
        </MessageButton>
      </ImageMessage>
      {
        // "See what others are saying"
      }
      <div>
        <ReviewTitle>See what others are saying:</ReviewTitle>
      </div>
      {
        // Reviews
      }
      <ReviewSection>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{ReviewOne}</CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{ReviewTwo}</CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{ReviewThree}</CardText>
        </ReviewCard>
      </ReviewSection>
      {
        // Apply button at the button of page
      }
      <BottomButton>
        <Button type="primary" size={'large'}>
          Apply
        </Button>
      </BottomButton>
    </Layout>
  );
}

export default RenderLandingPageForGroomers;
