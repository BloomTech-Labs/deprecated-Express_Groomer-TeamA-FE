import React from 'react';
import { Button, Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import NavBar from '../../Navigation/NavBar';
import styled from 'styled-components';

const { Content } = Layout;

const Heading = styled.h1`
  text-align: center;
  padding: '1%';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2%;

  @media only screen and (max-width: 1500px) {
    font-size: 1.3rem;
    margin-top: 4%;
  }
`;

const ImageMessage = styled(Content)`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
  margin: 3%;
  border-radius: 5px;
  box-shadow: 20px 20px 60px #b9b9b9, -20px -20px 60px #fbfbfb;

  @media only screen and (max-width: 1500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 760px) {
    margin: 0%;
    box-shadow: none;
    width: 100%;
  }
`;

const Image = styled.img`
  border-radius: 5px;

  @media only screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const MessageButton = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
`;

const Message = styled.h2`
  margin-bottom: 5%;

  @media only screen and (max-width: 1500px) {
    font-size: large;
  }
`;

const ReviewTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1.5%;
  font-size: 1.7rem;

  @media only screen and (max-width: 1500px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 760px) {
    margin-top: 10%;
  }
`;

const ReviewSection = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
  }
`;

const ReviewCard = styled(Content)`
  border: 1px solid gray;
  margin: 1%;
  padding: 3%;
  border-radius: 5px;
  box-shadow: 20px 20px 60px #b9b9b9, -20px -20px 60px #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;

  @media only screen and (max-width: 1500px) {
    width: 90%;
    margin: 3% 0 3% 0;
  }

  @media only screen and (max-width: 760px) {
    box-shadow: none;
    width: 100%;
  }
`;

const CardText = styled.h3`
  margin-top: 5%;
`;

const BottomButton = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;

  @media only screen and (max-width: 1500px) {
    margin-bottom: 3%;
  }
`;

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
          <Message>
            Join our network of professional groomers. We will display your
            business to clients in your area. They will be able to schedule
            appointments with you. You will be able to check the client's pets
            to make sure they have the appropriate vaccines and verifications
            before going to your establishment. Once the service is finished the
            client will be able to provide feedback and rate the service they
            received. Do a good job and your rating will increase making your
            business visible to more clients in your area. This is an
            extraordinary opportunity to make your business widespread and
            available to more clients.
          </Message>
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
          <CardText>
            John Doe: “If you're looking for a place to expand your grooming
            business this is it. I started out in my garage by myself. Today I
            own a large building with several employees. I even have a groomer
            bus that allows me to go to the client’s house. It was all thanks to
            Express Groomer. ”
          </CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>
            Jane Miller: “I recently started using Express Groomer. I wanted
            more people to know about my business. Within a few days I started
            seeing a lot more people coming into my establishment and many more
            scheduling appointments through Express Groomer. Thank you Express
            Groomer!”
          </CardText>
        </ReviewCard>
        <ReviewCard>
          <Avatar size={150} icon={<UserOutlined />} />
          <CardText>
            James Smith: “Thanks to Express Groomer I am able to check my
            client’s pets for verifications and vaccines. If a specific pet does
            not meet the necessary requirements. I can cancel the appointment
            and request the client to take the pet to a vet before coming into
            my business.”
          </CardText>
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
