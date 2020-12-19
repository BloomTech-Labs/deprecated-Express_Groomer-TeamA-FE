import styled from 'styled-components';
import { Layout } from 'antd';

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

export { Heading, ImageMessage, Image, MessageButton, Message };
