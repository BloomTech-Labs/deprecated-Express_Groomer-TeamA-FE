import React from 'react';
import { data } from './data';
import styled from 'styled-components';
import Card from './Card';
import { Link } from 'react-router-dom';

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2px;
  border: 1px solid #0384fc;
  background-color: #0384fc;
  padding: 0.5% 2% 0.5% 2%;
  color: white;
  font-size: 120%;
  text-align: center;
  :hover {
    background-color: #4aa8ff;
    color: white;
  }
  @media only screen and (max-width: 550px) {
    width: 50%;
    padding: 3% 2% 3% 2%;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;

function RenderScheduledAppointments(props) {
  return (
    <>
      <ProfileDiv>
        <StyledLink to="/myprofile">Home</StyledLink>
      </ProfileDiv>
      <ProfileDiv>
        <h1>Upcoming Appointments</h1>
      </ProfileDiv>
      <OuterDiv>
        {data.map(item => {
          return <Card key={item.id} entry={item} />;
        })}
      </OuterDiv>
    </>
  );
}

export default RenderScheduledAppointments;
