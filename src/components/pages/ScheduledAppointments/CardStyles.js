import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardOuterDiv = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1% 3% 1% 3%;
  margin: 0.7%;
  width: 16%;
  box-shadow: 9px 9px 18px #aeaeae, -9px -9px 18px #ffffff;
  @media only screen and (max-width: 1300px) {
    width: 50%;
    box-shadow: none;
    margin: 0 0 5% 0;
    padding: 3% 5% 3% 5%;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    margin: 0 0 5% 0;
    padding: 3% 5% 3% 5%;
  }
`;

const OuterDataDiv = styled.div`
  margin: 5% 0 5% 0;
`;

const InnerDataDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Link)`
  border-radius: 2px;
  border: 1px solid #0384fc;
  background-color: #0384fc;
  color: white;
  font-size: 120%;
  text-align: center;
  padding: 2% 0 2% 0;
  :hover {
    background-color: #4aa8ff;
    color: white;
  }
`;

const StyledRedButton = styled.button`
  margin-top: 3%;
  border-radius: 2px;
  border: 1px solid #a82323;
  background-color: #a82323;
  color: white;
  font-size: 120%;
  text-align: center;
  padding: 2% 0 2% 0;
  :hover {
    background-color: #b05858;
    color: white;
  }
`;

export {
  StyledRedButton,
  StyledButton,
  InnerDataDiv,
  OuterDataDiv,
  CardOuterDiv,
};
