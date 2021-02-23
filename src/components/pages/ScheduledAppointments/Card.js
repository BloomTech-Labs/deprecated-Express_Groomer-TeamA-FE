import React from 'react';
import { connect } from 'react-redux';
import {
  StyledRedButton,
  StyledButton,
  InnerDataDiv,
  OuterDataDiv,
  CardOuterDiv,
} from './CardStyles';
import { Image } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { deleteAppointment } from '../../../api';

function Card(props) {
  const { authState } = useOktaAuth();

  let date = new Date(props.entry.appointment_date_time);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let fulldate = `${month + 1}/${day}/${year}`;
  //   let pet = null;
  //   props.pets.forEach(i => {
  //     if (i.id === props.entry.pet_id) {
  //       pet = i;
  //     }
  //   });

  //   console.log(pet);

  return (
    <>
      <CardOuterDiv>
        <OuterDataDiv>
          <InnerDataDiv>{fulldate}</InnerDataDiv>
          <InnerDataDiv>{`${hours}:${minutes}`}</InnerDataDiv>
        </OuterDataDiv>
        {/* <Image src={pet.image_url} height={150} /> AWAITING BACKEND CHANGES*/}
        <OuterDataDiv>
          {/* <InnerDataDiv>Name: {pet.pet_name}</InnerDataDiv> AWAITING BACKEND CHANGES*/}
          <InnerDataDiv>Status: {props.entry.status}</InnerDataDiv>
        </OuterDataDiv>
        <StyledButton>
          {/* to={`/appointments/scheduled/${props.entry.id}`} COMPONENT UNDER CONSTRUCTION PLEASE CHECK AppointmentInfo FOLDER */}
          Appt. Info
        </StyledButton>
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

// export default connect(state => {
//   return {
//     pets: state.pets,
//   };
// })(Card);
export default Card;
