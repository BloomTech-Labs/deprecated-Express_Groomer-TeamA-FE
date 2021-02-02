import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { OuterDiv, StyledLink, ProfileDiv } from './Styles';

function RenderScheduledAppointments(props) {
  console.log(props.appointments);
  console.log(props.pets);
  return (
    <>
      <ProfileDiv>
        <StyledLink to="/myprofile">My Profile</StyledLink>
      </ProfileDiv>
      <ProfileDiv>
        <h1>All Appointments</h1>
      </ProfileDiv>
      <OuterDiv>
        {props.appointments.map(item => {
          return <Card key={item.id} entry={item} />;
        })}
      </OuterDiv>
    </>
  );
}

export default connect(state => {
  return {
    appointments: state.appointments,
    pets: state.pets,
  };
})(RenderScheduledAppointments);
