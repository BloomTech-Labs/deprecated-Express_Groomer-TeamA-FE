import React from 'react';
import husky from '../../../assets/husky.jpg';
import map from '../../../assets/sample-map.png';
import mediumdog from '../../../assets/mediumdog.jpg';
import { Button, Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  ReviewSection,
  ReviewCard,
  CardText,
  ReviewTitle,
} from '../LandingForGroomers/BottomStyles';
import {
  ImageMessage,
  MessageButton,
  Image,
  Message,
} from '../LandingForGroomers/TopStyles';
import {
  HeaderImg,
  FirstParagraphContent,
  SecondParagraphContent,
  MapImg,
  ResizingBreakPoint,
  ButtonStyler,
  FirstReviewBlurb,
  SecondReviewBlurb,
  ThirdReviewBlurb,
  ContentCard,
} from './landingPageStyledComponents';

function RenderLandingPage() {
  return (
    <Layout>
      <div className="aspect-ratio-16x9">
        <div className="aspect-ratio-container">
          <HeaderImg src={husky} alt="image of two dogs looking at camera" />
        </div>
      </div>
      <ImageMessage>
        <div>
          <Image
            alt="black golden retriever puppy looking up at camera while sitting on wood flooring"
            src={mediumdog}
          />
        </div>
        <MessageButton>
          <Message>{FirstParagraphContent[0]}</Message>
        </MessageButton>
      </ImageMessage>
      <ResizingBreakPoint>
        <hr></hr>
      </ResizingBreakPoint>
      <ReviewTitle>How it works</ReviewTitle>
      <MapImg src={map} />
      <ContentCard>{SecondParagraphContent[0]}</ContentCard>
      <ResizingBreakPoint>
        <hr></hr>
      </ResizingBreakPoint>
      <ReviewTitle>Reviews</ReviewTitle>
      <ReviewSection>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{FirstReviewBlurb}</CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{SecondReviewBlurb}</CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>{ThirdReviewBlurb}</CardText>
        </ReviewCard>
      </ReviewSection>
      <ButtonStyler>
        <Button type="primary" size={'large'}>
          Sign Up
        </Button>
      </ButtonStyler>
    </Layout>
  );
}
export default RenderLandingPage;
