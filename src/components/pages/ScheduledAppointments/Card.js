import React from 'react';
import {
  StyledRedButton,
  StyledButton,
  InnerDataDiv,
  OuterDataDiv,
  CardOuterDiv,
  StyledLink,
} from './CardStyles';
import { Image } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { deleteAppointment, editAppointment } from '../../../api';

function Card(props) {
  const { authState } = useOktaAuth();

  let date = new Date(props.entry.appointment_date_time);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let fulldate = `${month + 1}/${day}/${year}`;

  console.log(props.user_type);

  return (
    <>
      <CardOuterDiv>
        <OuterDataDiv>
          <InnerDataDiv>{fulldate}</InnerDataDiv>
          <InnerDataDiv>{`${hours}:${minutes}`}</InnerDataDiv>
        </OuterDataDiv>
        <Image src={props.entry.pet.image_url} height={150} />
        <OuterDataDiv>
          <InnerDataDiv>Name: {props.entry.pet.name}</InnerDataDiv>
          <InnerDataDiv>Status: {props.entry.status}</InnerDataDiv>
        </OuterDataDiv>
        {props.user_type === 'Groomer' ? ( // if user_type is groomer and status is pending add approve button
          props.entry.status === 'Pending' ? (
            <StyledButton
              onClick={() =>
                editAppointment(authState, {
                  appointment_id: props.entry.id,
                  status: 'Approved',
                })
              }
            >
              Approve
            </StyledButton>
          ) : null
        ) : (
          <StyledLink>
            {/* to={`/appointments/scheduled/${props.entry.id}`} COMPONENT UNDER CONSTRUCTION */}
            Appt. Info
          </StyledLink>
        )}
        <StyledRedButton
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            deleteAppointment(authState, props.entry.id);
          }}
        >
          Cancel Appt.
        </StyledRedButton>
      </CardOuterDiv>
    </>
  );
}

export default Card;
