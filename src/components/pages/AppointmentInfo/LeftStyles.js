import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
`;

const Title = styled.p`
  font-size: 2rem;
  @media only screen and (max-width: 1600px) {
    font-size: 1.7rem;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  padding: 0 10% 0 10%;
  justify-content: space-evenly;
  @media only screen and (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2px;
  border: 1px solid #0384fc;
  background-color: #0384fc;
  padding: 1% 2% 1% 2%;
  color: white;
  font-size: 120%;
  margin-bottom: 2%;
  :hover {
    background-color: #4aa8ff;
    color: white;
  }
  @media only screen and (max-width: 1600px) {
    padding: 2% 5% 2% 5%;
  }
`;

const LeftSection = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid gray;
  flex-direction: column;
  padding: 5%;
  width: 30%;
  margin-top: 2%;
  margin-bottom: 8%;
  box-shadow: 18px 18px 36px #aeaeae, -18px -18px 36px #ffffff;
  @media only screen and (max-width: 1600px) {
    width: 100%;
    box-shadow: none;
  }
`;

const RightSection = styled(LeftSection)`
  width: 60%;
  @media only screen and (max-width: 1600px) {
    width: 100%;
  }
`;

export { TopDiv, Title, OuterDiv, StyledLink, LeftSection, RightSection };
