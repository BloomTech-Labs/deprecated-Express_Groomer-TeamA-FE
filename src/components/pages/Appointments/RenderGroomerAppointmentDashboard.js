import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Navigation/NavBar';
import { Layout, Calendar, Button, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CalendarSize, WhiteSpaceForCalendar } from './CalendarStyles';
import {
  AppointmentDiv,
  AppointmentScheduledFont,
  AppointmentHeader,
  CalendarButtonStyle,
  PetNameIcon,
} from './AppointmentContainerStyles';
import { createAppointmentData } from '../../../api';
import { useOktaAuth } from '@okta/okta-react';

const iconSize = 50;
const appointmentWindowWidth = 300;

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
  // return value.format('YYYY-MM-DD')
  console.log(value);
}

function RenderGroomerAppointmentDashboard(props) {
  const [selectedDate, setSelectedDate] = useState(Date(Date.now()));
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);

  function onSelectChange(value) {
    setSelectedDate(value._d);
  }

  useEffect(() => {
    memoAuthService
      .getUser()
      .then(info => {
        createAppointmentData(authState, selectedDate);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <Layout>
      <NavBar />
      <CalendarSize>
        <WhiteSpaceForCalendar>
          <Calendar
            onPanelChange={onPanelChange}
            onSelect={onSelectChange}
            fullscreen={false}
          />
        </WhiteSpaceForCalendar>
        <AppointmentDiv>
          <AppointmentScheduledFont>
            {AppointmentHeader}
          </AppointmentScheduledFont>
          <CalendarButtonStyle>
            <Card
              title={selectedDate.toString()}
              extra={<a href="#">More</a>}
              style={{ width: appointmentWindowWidth }}
            >
              <PetNameIcon>
                Pet Name
                <Avatar size={iconSize} icon={<UserOutlined />} />
              </PetNameIcon>
              <p>Service</p>
              <Button
                onClick={createAppointmentData}
                type="primary"
                size="large"
              >
                Add Appointment
              </Button>
            </Card>
            <br />
          </CalendarButtonStyle>
        </AppointmentDiv>
      </CalendarSize>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    currentUser: state.currentUser,
    pets: state.pets,
  };
};

export default connect(mapStateToProps, {})(RenderGroomerAppointmentDashboard);
