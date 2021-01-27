import styled from 'styled-components';

export const AppointmentDiv = styled.div`
  margin-left: 4%;
  width: 35%;
  background-color: rgb(179, 0, 219); // is the value of strong magenta
  border: 1px solid #f0f0f0 border-radius 2px;
  height: 425px;
  margin-bottom: 3%;
  box-shadow: 20px 20px 60px #b9b9b9, -20px -20px 60px #fbfbfb;
`;

export const AppointmentScheduledFont = styled.div`
  text-align: left;
  padding: 4%;
  font-size: 1.7rem;
  font-color: black;
`;

export const CalendarButtonStyle = styled.div`
  font-color: white;
  padding-left: 2%;
`;

export const PetNameIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AppointmentHeader = [`Appointments Scheduled for...`];
