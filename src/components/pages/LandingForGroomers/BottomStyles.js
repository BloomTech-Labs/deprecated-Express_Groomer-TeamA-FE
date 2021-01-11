import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

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

export { ReviewTitle, ReviewSection, ReviewCard, CardText, BottomButton };
