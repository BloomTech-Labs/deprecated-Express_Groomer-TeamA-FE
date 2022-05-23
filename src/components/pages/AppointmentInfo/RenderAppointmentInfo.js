import React from 'react';
import { data } from '../ScheduledAppointments/data';
/*
This component takes in dummy data. It is not hooked up to redux.
*/
import { useParams } from 'react-router-dom';
import ApptHistoryCard from './ApptHistoryCard';
import {
  TopDiv,
  Title,
  OuterDiv,
  StyledLink,
  LeftSection,
  RightSection,
} from './LeftStyles';
import {
  InnerSectionDiv,
  RightInnerSectionDiv,
  HealthInfoDiv,
  AppointmentHistoryTopDiv,
  AppointmentHistoryBottomDiv,
  Image,
} from './RightStyles';

function RenderAppointmentInfo(props) {
  const params = useParams();

  let appointmentInfo = null;

  data.forEach(item => {
    if (item.id == params.id) {
      appointmentInfo = item;
    }
  });

  return (
    <>
      <TopDiv>
        <StyledLink to="/appointments/scheduled">Back</StyledLink>
        <Title>Appointment Information</Title>
      </TopDiv>
      <OuterDiv>
        <LeftSection>
          <h1>{appointmentInfo.pet_name}</h1>
          <Image src={appointmentInfo.img}></Image>
          <InnerSectionDiv>
            <div>
              <h3>Type:</h3>
              <h3>{appointmentInfo.type}</h3>
            </div>
            <div>
              <h3>Breed:</h3>
              <h3>{appointmentInfo.breed}</h3>
            </div>
          </InnerSectionDiv>
          <HealthInfoDiv>
            <h3>Health Information:</h3>
            <p>{appointmentInfo.healthInfo}</p>
          </HealthInfoDiv>
        </LeftSection>
        <RightSection>
          <RightInnerSectionDiv>
            <h1>Date: {appointmentInfo.date}</h1>
            <h1>Time: {appointmentInfo.time}</h1>
          </RightInnerSectionDiv>
          <AppointmentHistoryTopDiv>
            <h2>Appointment History:</h2>
          </AppointmentHistoryTopDiv>
          <AppointmentHistoryBottomDiv>
            {appointmentInfo.apptHistory.map(item => {
              return <ApptHistoryCard key={item.id} apptInfo={item} />;
            })}
          </AppointmentHistoryBottomDiv>
        </RightSection>
      </OuterDiv>
    </>
  );
}
export default RenderAppointmentInfo;
