import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
  border: 1px solid gray;
  margin: 0 0.5% 0 0.5%;
  padding: 3%;
  border-radius: 5px;
  width: 15%;
  @media only screen and (max-width: 1600px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function ApptHistoryCard(props) {
  return (
    <>
      <OuterDiv>
        <p>{props.apptInfo.date}</p>
        <p>{props.apptInfo.time}</p>
        <p>{props.apptInfo.service}</p>
      </OuterDiv>
    </>
  );
}
export default ApptHistoryCard;
